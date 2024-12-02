import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../model/task-status.enum';
import { User } from 'src/auth/entities/user.entity';
import { Exclude } from 'class-transformer';

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
  @ManyToOne(()=>User,(user)=>user.task,{eager:false})
 @Exclude({toPlainOnly:true})
  public user:User
}
