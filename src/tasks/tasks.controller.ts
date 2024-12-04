import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task.dto';

import { FilteringTaskDto } from './dto/filtering.dto';
import { Task } from './entities/task.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  private logger=new Logger("TaskController")
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
  findone(@Param('id') id: string, @GetUser() user: User): Promise<Task> {
    return this.tasksService.findTaskById(id, user);
  }
  @Post()
  createTask(
    @Body() createTask: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.createTask(createTask, user);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string,@GetUser() user:User): Promise<string> {
    return this.tasksService.remove(id,user);
  }
  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updatestatusDto: UpdateTaskStatusDto,
    @GetUser() user: User
  ): Promise<Task> {
    const { status } = updatestatusDto;
    return this.tasksService.updateTask(id, status,user);
  }
  @Get()
  findAll(
    @Query() filteingDto: FilteringTaskDto,
    @GetUser() user: User,
  ): Promise<Task[]> {
    this.logger.verbose(`The user ${user.username} is trying to get tasks with the filters of ${JSON.stringify(filteingDto)} `)
    return this.tasksService.findTask(filteingDto, user);
  }
}
