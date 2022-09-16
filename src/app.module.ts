import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Database */
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsModule } from './admins/admins.module';
import { Admins } from './admins/admins.entity';
import { CategoriesModule } from './categories/categories.module';
import { Categories } from './categories/categories.entity';
import { NotificationsModule } from './notifications/notifications.module';
import { Notifications } from './notifications/notifications.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '157.230.12.204',
      port: 3306,
      username: 'admin',
      password: 'avizapan',
      database: 'avizapanDB',
      entities: [Admins, Categories, Notifications],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AdminsModule,
    CategoriesModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
