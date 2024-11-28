import {
  IsEnum,
  isEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { TaskStatus } from '../model/task-status.enum';

export class FilteringTaskDto {
  @IsOptional()
  @IsString()
  search?: TaskStatus;
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: string;
}
