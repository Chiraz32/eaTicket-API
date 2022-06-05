import {CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from "typeorm";


export class TimeStampEntities {
    @CreateDateColumn()
        createdAt: Date;

    @UpdateDateColumn()
        updateAt: Date;

    @DeleteDateColumn()
        deletedAt: Date;

}