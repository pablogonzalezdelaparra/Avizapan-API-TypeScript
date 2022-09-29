import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notifications } from './notifications.entity';
import { Repository } from 'typeorm';
import { Tokens } from 'src/tokens/tokens.entity';


@Injectable()
export class NotificationsService {
    constructor(
        @InjectRepository(Notifications)
        private NotificationRepository: Repository<Notifications>,
        @InjectRepository(Tokens)
        private TokensRepository: Repository<Tokens>,
    ) { }

    /* Return all notifications */
    async returnAllNotification() {
        const notifications = this.NotificationRepository
            .createQueryBuilder("notification")
            //.leftJoinAndSelect("notification.category", "category")
            /*.where("notification.id = :id", { id: 1 })*/
            .getRawMany()
        return notifications
    }

    /* Return all active notifications */
    async returnAllActiveNotification() {
        const notifications = this.NotificationRepository
            .createQueryBuilder("notification")
            //.leftJoinAndSelect("notification.category", "category")
            //.where("DATE_ADD(notification.posted, INTERVAL notification.duration HOUR) > CURDATE()")
            .getRawMany()
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
    async insertNotification(title: any, description: any, location: any/* -> Cambiar el nombre a zipcode, longitude: any, latitude: any */, duration: any, adminId: any, categoryId: any) {
        const action = this.NotificationRepository
            .createQueryBuilder()
            .insert()
            .into(Notifications)
            .values([
                {
                    title: title,
                    description: description,
                    location: location, /* Cambiar el nombre a zipcode
                    longitude: longitude,
                    latitude: latitude, 
                    */
                    duration: duration,
                    admin: adminId,
                    category: categoryId,
                }
            ])
            .execute();
    }

    /* Get Tokens from Tokens Repository */
    async getTokensFromNotifications(){
        const tokens = this.TokensRepository
            .createQueryBuilder("token")
            .getMany()
        return tokens

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
