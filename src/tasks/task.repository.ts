import { EntityRepository, Repository } from 'typeorm';
import { Task } from './entities/task.entity';

export class TaskRepository extends Repository<Task> {}