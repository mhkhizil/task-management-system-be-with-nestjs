import { TaskStatus } from "../entities/task.entity";

export class FilteringTaskDto {
    search?: TaskStatus;
    status?: string;
  }
  