import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Notifications } from 'src/notifications/notifications.entity';
import { Categories } from 'src/categories/categories.entity';
import { Admins } from './admins.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications, Categories, Admins])],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule {}
