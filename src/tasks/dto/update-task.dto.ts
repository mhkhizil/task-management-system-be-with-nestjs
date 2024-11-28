import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskStatus } from '../model/task.model';
import { IsEnum, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
