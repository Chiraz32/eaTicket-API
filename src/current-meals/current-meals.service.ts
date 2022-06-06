import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddMealDto } from './dto/meal.dto';
import { MealEntity } from './entity/meal.entity';

@Injectable()
export class CurrentMealsService {
    //service pour rating des meals 
    constructor(@InjectRepository(MealEntity) private mealRepository: Repository<MealEntity>){}

    async getAll() : Promise<MealEntity[]> {
        return await this.mealRepository.find();
    }

    async getById(id: number) : Promise<MealEntity> {
        return await this.mealRepository.findOneBy({id:id});
    }

    async addMeal(meal: AddMealDto): Promise<MealEntity> {
        const newMeal = this.mealRepository.create({
            ...meal
        })
        return await this.mealRepository.save(newMeal);
    }

    async updateMeal(id: number, meal:AddMealDto):Promise<MealEntity> {
        const newMeal = await this.mealRepository.preload({
            id,
            ...meal
        });
        return await this.mealRepository.save(newMeal);
    }

    async removeMeal(id:number) {
        const mealToRemove = await this.getById(id);
        if(!mealToRemove){
            throw new NotFoundException('The meal is not found');
        }
        return await this.mealRepository.remove(mealToRemove);
    }

    async rate(id: number, rating: number) :Promise<MealEntity>{
        const mealToRate = await this.getById(id);
        (await mealToRate).ratedBy += 1;
        (await mealToRate).totalRating += rating;
        (await mealToRate).finalRating = (await mealToRate).totalRating / (await mealToRate).ratedBy;
        
        return await this.mealRepository.save(mealToRate);
    }
}
