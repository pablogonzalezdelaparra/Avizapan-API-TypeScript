import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notifications } from './notifications.entity';
import { Repository } from 'typeorm';


@Injectable()
export class NotificationsService {
    constructor(
        @InjectRepository(Notifications)
        private NotificationRepository: Repository<Notifications>,
    ) { }

    async searchNotification() {
        const firstUser = this.NotificationRepository
            .createQueryBuilder("notification")
            .leftJoinAndSelect("notification.admin", "admin")
            .leftJoinAndSelect("notification.category", "category")
            .where("notification.id = :id", { id: 1 })
            .getOne()
        return firstUser

    }

}
