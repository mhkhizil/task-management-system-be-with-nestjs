import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './users.repository';
import { DataSource } from 'typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [   PassportModule.register({
    defaultStrategy: 'jwt',
  }),
  JwtModule.register({
    secret: 'topSecret51',
    signOptions: {
      expiresIn: 3600,
    },
  }),TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    AuthService,JwtStrategy,
    {
      provide: UserRepository,
      useFactory: (dataSource: DataSource) => new UserRepository(dataSource),
      inject: [DataSource],
    },
  ],
})
export class AuthModule {}
