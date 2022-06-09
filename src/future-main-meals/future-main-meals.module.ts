import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainOptionEntity } from './entity/mainOptions.entity';
import { FutureMainMealsController } from './future-main-meals.controller';
import { FutureMainMealsService } from './future-main-meals.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainOptionEntity])],
  providers: [FutureMainMealsService],
  controllers: [FutureMainMealsController]
})
export class FutureMainMealsModule {}
