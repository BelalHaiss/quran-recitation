import { PartialType } from '@nestjs/mapped-types';
import { CreateShe5Dto } from './create-she5.dto';

export class UpdateShe5Dto extends PartialType(CreateShe5Dto) {}
