import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity("user")
export class UserEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name: string;

    @Column({
        length: 50
    })
    firstname: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}