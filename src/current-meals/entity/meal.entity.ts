import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("meal")
export class MealEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    entry: string;

    @Column()
    mainMeal: string;

    @Column()
    dessert: string;

    @Column()
    totalRating:number;

    @Column()
    ratedBy: number;

    @Column()
    finalRating: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}