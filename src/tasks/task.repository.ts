import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { Injectable } from '@nestjs/common';
import { FilteringTaskDto } from './dto/filtering.dto';
import { stat } from 'fs';
@Injectable()
export class TaskRepository extends Repository<Task> {

}
