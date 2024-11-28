import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { FilteringTaskDto } from './dto/filtering.dto';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // @Post()
  // create(@Body() CreateTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.create(CreateTaskDto);
  // }

  // @Get()
  // findAll(@Query() filteingDto: FilteringTaskDto): Task[] {
  //   return Object.keys(filteingDto).length
  //     ? this.tasksService.findAllTaskWithQuery(filteingDto)
  //     : this.tasksService.findAllTask();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): Task {
  //   return this.tasksService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.tasksService.update(id, updateTaskDto);
  // }

  // @Delete('/:id')
  // remove(@Param('id') id: string): String {
  //   return this.tasksService.remove(id);
  // }
  @Get(':id')
  findone(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findTaskById(id);
  }
}
