import { Category, CategoryType, ParentCategory } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';
import { OmitDateFields } from 'src/shared/types/util.types';

export class CreateCategoryDto
  implements OmitDateFields<Category, 'category_id'>
{
  @IsString()
  label: string;

  @IsEnum(CategoryType)
  category_type: CategoryType;

  @IsEnum(ParentCategory)
  parent_category: ParentCategory;
}
