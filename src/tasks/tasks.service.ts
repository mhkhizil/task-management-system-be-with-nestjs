import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {  TaskStatus } from './model/task-status.enum';
import { v4 as uuid } from 'uuid';
import { FilteringTaskDto } from './dto/filtering.dto';
import { TaskRepository } from './task.repository';
@Injectable()
export class TasksService {
constructor(private taskRepository:TaskRepository){}
  // create(CreateTaskDto: CreateTaskDto): Task {
  //   const { title, description } = CreateTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.task.push(task);
  //   return task;
  // }

  // findAllTaskWithQuery(filteingDto: FilteringTaskDto): Task[] {
  //   const { search, status } = filteingDto;
  //   let tempTask = this.findAllTask();
  //   tempTask = status
  //     ? tempTask.filter((task) => task.status === status)
  //     : tempTask;
  //   tempTask = search
  //     ? tempTask.filter((task) =>
  //         task.title.includes(search) || task.description.includes(search)
  //           ? true
  //           : false,
  //       )
  //     : tempTask;
  //   return tempTask;
  // }
  // findAllTask(): Task[] {
  //   return this.task;
  // }

  // findOne(id: string): Task {
  //   const foundTask = this.task.find((t) => t.id === id);
  //   if (!foundTask) {
  //     throw new NotFoundException(
  //       `Task that has an ID of ${id} does not exists`,
  //     );
  //   }
  //   return foundTask;
  // }

  // update(id: string, updateTaskDto: UpdateTaskDto) {
  //   const singleTask = this.findOne(id); //get the original reference of the Task array
  //   Object.assign(singleTask, updateTaskDto); //singleTask=updateTaskDto will not works becuse it will just change the object reference in memory
  //   // if (!singleTask) {
  //   //   throw new Error(`Task with ID ${id} not found`);
  //   // }
  //   // return (this.task = this.task.map((t) =>
  //   //   t.id === id ? { ...t, ...updateTaskDto } : t,
  //   // ));
  //   return singleTask;
  // }

  // remove(id: string): String {
  //   this.task = this.task.filter((t) => t.id !== id);

  //   return 'Task deleted the final tak array is ' + JSON.stringify(this.task);
  // }
}
