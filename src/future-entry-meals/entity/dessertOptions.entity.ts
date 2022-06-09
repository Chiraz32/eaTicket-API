import {
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,} from "typeorm";
import {UserEntity} from "../../user/entity/user.entity";
import {TimeStampEntities} from "../../TimeStamp/TimeStampEntities";

@Entity("dessertoption")
export class DessertOptionEntity extends TimeStampEntities {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    votes: number;
    

    @ManyToMany(
        type => UserEntity,
        user=>user.dessertOptions
    )
    users :UserEntity[];
}