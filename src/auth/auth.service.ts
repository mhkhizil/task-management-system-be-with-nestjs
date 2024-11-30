import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { TaskRepository } from 'src/tasks/task.repository';
import { createAuthCredentialDto } from './dto/create-authCredential.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository:UserRepository){

  }
  signUp(createAuthCredentialDto: createAuthCredentialDto):Promise<void> {
    return this.userRepository.createUser(createAuthCredentialDto);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
