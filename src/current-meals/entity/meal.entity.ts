import {
    Column,
    Entity, ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import {UserEntity} from "../../user/entity/user.entity";
import {TimeStampEntities} from "../../TimeStamp/TimeStampEntities";

@Entity("meal")
export class MealEntity extends TimeStampEntities{
    
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

    @Column("decimal", { precision: 8, scale: 2 })
    finalRating: number;

    @ManyToMany(
        type => UserEntity,
        user=>user.meals
    )
    users : UserEntity;
}