import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository])],//if some thig wrong add entity instead of repo
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
