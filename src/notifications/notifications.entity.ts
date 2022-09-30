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
    location: number; //Cambiar el nombre a zipcode para evitar confundirnos
    
    @Column({ type: "double"})
    longitude: number;
      
    @Column({ type: "double"})
    latitude: number;
     

    @Column({
        type: 'datetime',
        default: () => 'NOW()',})
    posted: Date;

    @Column()
    duration: number;

    @ManyToOne(() => Admins, (admin) => admin.notifications)
    admin: Admins

   
    @ManyToOne(() => Categories, (category) => category.notifications)
    category: Categories
}