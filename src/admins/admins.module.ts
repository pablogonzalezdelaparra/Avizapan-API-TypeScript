import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Notifications } from 'src/notifications/notifications.entity';
import { Categories } from 'src/categories/categories.entity';
import { Admins } from './admins.entity';

//JWT
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { secret } from 'src/Utils/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notifications, Categories, Admins]), 
    PassportModule,
    JwtModule.register({secret: secret, signOptions: { expiresIn: '1h'}}),
  ],
  controllers: [AdminsController],
  providers: [AdminsService, JwtStrategy],
})
export class AdminsModule {}
