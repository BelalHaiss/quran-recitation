import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CategoryType, ParentCategory } from '@prisma/client';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsOptional()
  @IsString()
  label: string;

  @IsOptional()
  @IsEnum(CategoryType)
  category_type: CategoryType;

  @IsOptional()
  @IsEnum(ParentCategory)
  parent_category: ParentCategory;

  @IsOptional()
  @IsString()
  image_url: string;
}
