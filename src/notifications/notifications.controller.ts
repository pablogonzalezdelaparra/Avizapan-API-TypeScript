import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';


@Controller('notifications')
export class NotificationsController {
    constructor(private readonly NotificationService: NotificationsService) { }

    @Get()
    async sayNotifications() {
        var answer = await this.NotificationService.searchNotification();
        return answer;
    }
}
