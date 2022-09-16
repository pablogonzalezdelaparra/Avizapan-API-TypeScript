import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
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

    /* @Column()
    admin_id: Admins
    @ManyToOne(() => Admins, (admin) => admin.notifications)
    @JoinColumn({name: "admin_id"})
    admin: Admins */

    @ManyToOne(() => Admins, (admin) => admin.notifications)
    admin: Admins

   
    @ManyToOne(() => Categories, (category) => category.notifications)
    category: Categories
}