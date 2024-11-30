import { Repository, DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { createAuthCredentialDto } from './dto/create-authCredential.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
//custom repo usage default repo use yin ka module forfeatrure htl mhr entity ko define p service mhr @InjectRepository devorator tin p inject yone pl custom repo so yin constructor khan p datasource api ko use ya dl aoyyin module yk provider htl mhr pr twr declare ya dl
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(
    createAuthCredentialDto: createAuthCredentialDto,
  ): Promise<void> {
    const { username, password } = createAuthCredentialDto;
    const salt= await bcrypt.genSalt();
    const hashed=await bcrypt.hash(password,salt)
    const user = this.create({ username, password:hashed });
    try {
            await this.save(user);
    } catch (error) {
        if (error.code ==='23505') {
            throw new ConflictException('User already exists')
        }else{
            throw new InternalServerErrorException()
        }
    }

  }
}
