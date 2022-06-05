import {
    Column,
    Entity,
    ManyToOne,
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

    @ManyToOne(
        type => UserEntity,
        user=>user.sendingTransactions
    )
    sender : UserEntity;

    @ManyToOne(
        type => UserEntity,
        user=>user.recievingTransactions
    )
    reciever : UserEntity;



}