import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@WebSocketGateway()
export class StudentGateway {
  constructor(private readonly studentService: StudentService) {}

  @SubscribeMessage('createStudent')
  create(@MessageBody() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @SubscribeMessage('findAllStudent')
  findAll() {
    return this.studentService.findAll();
  }

  @SubscribeMessage('findOneStudent')
  findOne(@MessageBody() id: number) {
    return this.studentService.findOne(id);
  }

  @SubscribeMessage('updateStudent')
  update(@MessageBody() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(updateStudentDto.id, updateStudentDto);
  }

  @SubscribeMessage('removeStudent')
  remove(@MessageBody() id: number) {
    return this.studentService.remove(id);
  }
}
