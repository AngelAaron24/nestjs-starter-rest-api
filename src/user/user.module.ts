import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtAuthStrategy } from '../auth/strategies/jwt-auth.strategy';
import { SharedModule } from '../shared/shared.module';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { UserAclService } from './services/user-acl.service';
//import { ClientsModule, Transport } from '@nestjs/microservices';
//import { CacheModule } from '@nestjs/cache-manager';
//import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    /*
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        }),
      }),
    }),
    */
    SharedModule,
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserService, JwtAuthStrategy, UserAclService, UserRepository],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
