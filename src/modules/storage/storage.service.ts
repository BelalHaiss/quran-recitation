import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QuranLesson } from '@prisma/client';
import { join } from 'path';
import { Lesson_Info } from 'src/shared/types/quran';

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

  async uploadFile(
    file: Express.Multer.File,
    folder: 'audio' | 'pdf',
    info: Lesson_Info,
  ) {
    const Verse_From_To =
      info.surah_id + '_' + info.ayah_from + '_' + info.ayah_to;
    const fileName = `${folder}/${Verse_From_To + '_' + file.originalname}`;
    const bucket = this.storage.bucket(this.bucketName);

    const bucketFile = await bucket.file(fileName);
    await bucketFile.save(file.buffer);

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${bucketFile.name}`;
    return publicUrl;
  }
}
