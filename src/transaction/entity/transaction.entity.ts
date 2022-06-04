import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("transaction")
export class TransactionEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}