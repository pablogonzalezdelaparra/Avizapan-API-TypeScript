import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Notifications } from 'src/notifications/notifications.entity';

@Entity()
export class Admins {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Notifications, (notification) => notification.admin)
    notifications: Notifications[]
}