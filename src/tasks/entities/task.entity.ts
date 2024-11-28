import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../model/task.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  public id: string;
  @Column()
  public title: string;
  @Column()
  public description: string;
  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.OPEN })
  public status: TaskStatus;
}
