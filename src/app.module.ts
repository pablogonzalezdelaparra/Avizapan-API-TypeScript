import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Database */
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsModule } from './admins/admins.module';
import { CategoriesModule } from './categories/categories.module';
import { NotificationsModule } from './notifications/notifications.module';
import { Admins } from 'src/admins/admins.entity';
import { Categories } from 'src/categories/categories.entity';
import { Notifications } from 'src/notifications/notifications.entity';
import { TokensModule } from './tokens/tokens.module';
import { Tokens } from './tokens/tokens.entity';

import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '157.230.12.204',
      port: 3306,
      username: 'admin',
      password: 'avizapan',
      database: 'avizapanDB',
      entities: [Admins, Categories, Notifications, Tokens],
      synchronize: true,
    }),
    AdminsModule,
    CategoriesModule,
    NotificationsModule,
    TokensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
