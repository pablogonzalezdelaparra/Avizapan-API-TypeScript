import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Admins } from 'src/admins/admins.entity';
import { Categories } from 'src/categories/categories.entity';


@Entity()
export class Notifications {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    location: number;

    @Column({
        type: 'datetime',
        default: () => 'NOW()',})
    posted: Date;

    @Column({type: 'time',})
    duration: Date;

    @ManyToOne(() => Admins, (admin) => admin.notifications)
    admin: Admins

    @ManyToOne(() => Categories, (category) => category.notifications)
    category: Categories
}