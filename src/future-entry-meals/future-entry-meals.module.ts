import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DessertOptionEntity } from './entity/dessertOptions.entity';
import { FutureEntryMealsController } from './future-entry-meals.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DessertOptionEntity])],
  controllers: [FutureEntryMealsController]
})
export class FutureEntryMealsModule {}
