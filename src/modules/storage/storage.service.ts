import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

@Injectable()
export class StorageService {
  private storage: Storage;
  private bucketName: string;
  constructor(config: ConfigService) {
    const keyFilename = join(
      process.cwd(),
      config.getOrThrow('SERVICE_ACCOUNT_KEY_PATH'),
    );

    this.bucketName = config.getOrThrow('BUCKET_NAME');
    this.storage = new Storage({
      keyFilename,
    });
  }

  async uploadFile(file: Express.Multer.File, folder: 'audio' | 'pdf') {
    const fileName = `${folder}/${Date.now() + '_' + file.originalname}`;
    const bucket = this.storage.bucket(this.bucketName);

    const bucketFile = await bucket.file(fileName);
    await bucketFile.save(file.buffer);

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${bucketFile.name}`;

    return publicUrl;
  }
}
