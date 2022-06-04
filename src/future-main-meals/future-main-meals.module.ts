import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainOptionEntity } from './entity/mainOptions.entity';
import { FutureMainMealsService } from './future-main-meals.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainOptionEntity])],
  providers: [FutureMainMealsService]
})
export class FutureMainMealsModule {}
