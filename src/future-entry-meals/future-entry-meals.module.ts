import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DessertOptionEntity } from './entity/dessertOptions.entity';
import { FutureEntryMealsController } from './future-entry-meals.controller';
import { FutureEntryMealsService } from './future-entry-meals.service';

@Module({
  imports: [TypeOrmModule.forFeature([DessertOptionEntity])],
  providers: [FutureEntryMealsService],
  controllers: [FutureEntryMealsController],
})
export class FutureEntryMealsModule {}
