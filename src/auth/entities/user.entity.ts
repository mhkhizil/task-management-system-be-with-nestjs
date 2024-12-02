import { Task } from 'src/tasks/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;
  @Column({ unique: true })
  public username: string;
  @Column()
  public password: string;
  @OneToMany(()=>Task,(task)=>task.user,{eager:true})
  public task:Task[]
}
