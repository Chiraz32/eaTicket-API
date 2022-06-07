import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainOptionEntity } from './entity/mainOptions.entity';
import { FutureMainMealsService } from './future-main-meals.service';
import {FutureMainMealsController} from "./future-main-meals.controller";

@Module({
  imports: [TypeOrmModule.forFeature([MainOptionEntity])],
  controllers : [FutureMainMealsController],
  providers: [FutureMainMealsService]
})
export class FutureMainMealsModule {}
