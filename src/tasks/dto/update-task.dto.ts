import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskStatus } from '../model/task-status.enum';
import { IsEnum, IsString } from 'class-validator';
//if update all
// export class UpdateTaskDto extends PartialType(CreateTaskDto) {
//   @IsString()
//   title: string;
//   @IsString()
//   description: string;
//   @IsEnum(TaskStatus)
//   status: TaskStatus;
// }
export class UpdateTaskStatusDto  {

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
