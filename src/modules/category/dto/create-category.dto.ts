import { Category, CategoryType, ParentCategory } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OmitDateFields } from 'src/shared/types/util.types';

export class CreateCategoryDto
  implements OmitDateFields<Category, 'category_id'>
{
  @IsOptional()
  @IsString()
  image_url: string;

  @IsString()
  label: string;

  @IsEnum(CategoryType)
  category_type: CategoryType;

  @IsEnum(ParentCategory)
  parent_category: ParentCategory;
}
