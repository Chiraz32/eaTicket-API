import {
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import {UserEntity} from "../../user/entity/user.entity";
import {TimeStampEntities} from "../../TimeStamp/TimeStampEntities";

@Entity("transaction")
export class TransactionEntity extends TimeStampEntities{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToMany(
        type => UserEntity,
        user=>user.transactions
    )
    users : UserEntity[];


}