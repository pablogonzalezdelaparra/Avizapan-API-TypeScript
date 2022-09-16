import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Notifications } from 'src/notifications/notifications.entity';
import { Categories } from './categories.entity';
import { Admins } from 'src/admins/admins.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Notifications, Categories, Admins])],
    controllers: [CategoriesController],
    providers: [CategoriesService]
})
export class CategoriesModule {}