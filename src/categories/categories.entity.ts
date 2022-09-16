import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Notifications } from 'src/notifications/notifications.entity';

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    category: string;

    @OneToMany(() => Notifications, (notification) => notification.category)
    notifications: Notifications[]
}