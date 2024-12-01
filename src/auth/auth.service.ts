import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { TaskRepository } from 'src/tasks/task.repository';
import { createAuthCredentialDto } from './dto/create-authCredential.dto';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { log } from 'util';
import { json } from 'stream/consumers';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  signUp(createAuthCredentialDto: createAuthCredentialDto): Promise<void> {
    return this.userRepository.createUser(createAuthCredentialDto);
  }
  async singIn(
    createAuthCredentialDto: createAuthCredentialDto,
  ): Promise<{accessToken:string}> {
    const { username, password } = createAuthCredentialDto;
    const userExists = await this.userRepository.findOne({
      where: {
        username,
      },
    });

    if (userExists && (await bcrypt.compare(password, userExists.password))) {
      const payload:JwtPayload = { username };
      const accessToken:string = await this.jwtService.sign(payload);
      return {
        accessToken,
      };
    } else {
      throw new UnauthorizedException();
    }
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
