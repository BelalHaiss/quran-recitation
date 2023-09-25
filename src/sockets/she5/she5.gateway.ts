import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { She5Service } from './she5.service';
import { CreateShe5Dto } from './dto/create-she5.dto';
import { UpdateShe5Dto } from './dto/update-she5.dto';

@WebSocketGateway()
export class She5Gateway {
  constructor(private readonly she5Service: She5Service) {}

  @SubscribeMessage('createShe5')
  create(@MessageBody() createShe5Dto: CreateShe5Dto) {
    return this.she5Service.create(createShe5Dto);
  }

  @SubscribeMessage('findAllShe5')
  findAll() {
    return this.she5Service.findAll();
  }

  @SubscribeMessage('findOneShe5')
  findOne(@MessageBody() id: number) {
    return this.she5Service.findOne(id);
  }

  @SubscribeMessage('updateShe5')
  update(@MessageBody() updateShe5Dto: UpdateShe5Dto) {
    return this.she5Service.update(updateShe5Dto.id, updateShe5Dto);
  }

  @SubscribeMessage('removeShe5')
  remove(@MessageBody() id: number) {
    return this.she5Service.remove(id);
  }
}
