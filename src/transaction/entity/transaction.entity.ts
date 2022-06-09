import {
    Column,
    Entity, JoinColumn,
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

    @Column()
    senderId

    @ManyToOne(
        type => UserEntity,
        user=>user.sendingTransactions
    )
    @JoinColumn({
        name : "senderId"
    })
    sender : UserEntity;

    @Column()
    recieverId

    @ManyToOne(
        type => UserEntity,
        user=>user.recievingTransactions
    )
    @JoinColumn({
        name : "recieverId"
    })
    reciever : UserEntity;





}