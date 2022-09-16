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

    /* Return all notifications */
    async returnAllNotification() {
        const notifications = this.NotificationRepository
            .createQueryBuilder("notification")
            .leftJoinAndSelect("notification.category", "category")
            /*.where("notification.id = :id", { id: 1 })*/
            .getMany()
        return notifications
    }

    /* Return all active notifications */
    async returnAllActiveNotification() {
        const notifications = this.NotificationRepository
            .createQueryBuilder("notification")
            .leftJoinAndSelect("notification.category", "category")
            .where("DATE_ADD(notification.posted, INTERVAL notification.duration HOUR) > CURDATE()")
            .getMany()
        return notifications
    }

    /* Return notifications with a specific category */
    async returnCategoryNotification(categoryId) {
        const notifications = this.NotificationRepository
            .createQueryBuilder("notification")
            .leftJoinAndSelect("notification.category", "category")
            .where("category.id = :id", { id: categoryId})
            .getMany()
        return notifications
    }

    /* Return notifications with a specific location */
    async returnLocationNotification(location) {
        const notifications = this.NotificationRepository
            .createQueryBuilder("notification")
            .where("notification.location = :value", { value: location})
            .getMany()
        return notifications
    }

    /* Insert a notification */
    async insertNotification(title: any, description: any, location: any, posted: any, duration: any, adminId: any, categoryId: any) {
        const action = this.NotificationRepository
            .createQueryBuilder()
            .insert()
            .into(Notifications)
            .values([
                {
                    title: title,
                    description: description,
                    location: location,
                    posted: posted,
                    duration: duration,
                    admin: adminId,
                    category: categoryId,
                }
            ])
            .execute();
    }

    /* Example of how to insert a notification 
        {
        "title": "Carambola",
        "description": "Choque en la avenida principal",
        "location": 52937,
        "posted": "2022-09-16T09:44:43.000Z",
        "duration": 24,
        "adminId": 1,
        "categoryId": 1
        }
    */
}
