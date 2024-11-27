import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskStatus } from '../entities/task.entity';
import { IsEnum, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
