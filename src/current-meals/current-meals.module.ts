import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrentMealsController } from './current-meals.controller';
import { MealEntity } from './entity/meal.entity';
import { CurrentMealsService} from "./current-meals.service";

@Module({
  imports: [TypeOrmModule.forFeature([MealEntity])],
  controllers: [CurrentMealsController],
  providers : [CurrentMealsService]
})
export class CurrentMealsModule {}
