import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Tokens {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    token: string;
}