import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {UserEntity} from "../../user/entity/user.entity";
import {TimeStampEntities} from "../../TimeStamp/TimeStampEntities";

@Entity("mainoption")
export class MainOptionEntity extends TimeStampEntities{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    votes: number;

    @ManyToMany(
        type => UserEntity,
        user=>user.mainOptions
    )
    users :UserEntity[];

}