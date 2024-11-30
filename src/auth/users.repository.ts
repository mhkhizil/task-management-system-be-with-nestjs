import { Repository, DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { createAuthCredentialDto } from './dto/create-authCredential.dto';
//custom repo usage default repo use yin ka module forfeatrure htl mhr entity ko define p service mhr @InjectRepository devorator tin p inject yone pl custom repo so yin constructor khan p datasource api ko use ya dl aoyyin module yk provider htl mhr pr twr declare ya dl
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(
    createAuthCredentialDto: createAuthCredentialDto,
  ): Promise<void> {
    const { username, password } = createAuthCredentialDto;
    const user = this.create({ username, password });
    await this.save(user);
  }
}
