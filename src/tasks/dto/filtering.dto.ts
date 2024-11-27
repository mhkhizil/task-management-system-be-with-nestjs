import {
  IsEnum,
  isEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class FilteringTaskDto {
  @IsOptional()
  @IsString()
  search?: TaskStatus;
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: string;
}
