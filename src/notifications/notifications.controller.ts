import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';


@Controller('notifications')
export class NotificationsController {
    constructor(private readonly NotificationService: NotificationsService) { }

    /* Get all notifications */
    @Get()
    async sayNotifications() {
        var notifications = await this.NotificationService.returnAllNotification();
        return notifications;
    }

    /* Get all active notifications */
    @Get("active")
    async sayActiveNotifications() {
        var notifications = await this.NotificationService.returnAllActiveNotification();
        return notifications;
    }

    /* Get notification by their category ID */
    @Get("category/:categoryId")
    async sayCategoryNotifications(@Param('categoryId') categoryId) {
        var notifications = await this.NotificationService.returnCategoryNotification(categoryId);
        return notifications;
    }

    /* Get notification by their location */
    @Get("location/:location")
    async sayLocationNotifications(@Param('location') location) {
        var notifications = await this.NotificationService.returnLocationNotification(location);
        return notifications;
    }

    /* Post a notification */
    @Post()
    async AddNotification(@Body() body) {
        console.log("The data is:", body.title, body.description, body.location, body.posted, body.duration, body.adminId, body.categoryId)
        const action = this.NotificationService.insertNotification(body.title, body.description, body.location, body.posted, body.duration, body.adminId, body.categoryId);
        return "Notification was added succesfully";
    }
}
