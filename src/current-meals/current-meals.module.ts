import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrentMealsController } from './current-meals.controller';
import { MealEntity } from './entity/meal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MealEntity])],
  controllers: [CurrentMealsController]
})
export class CurrentMealsModule {}
