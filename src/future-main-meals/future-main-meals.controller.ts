import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';

import { CreateMainMealDto } from './dto/CreateMainMeal.dto';
import { UpdateNameMealDto } from './dto/UpdateNameMeal.dto';
import { MainOptionEntity } from './entity/mainOptions.entity';
import { FutureMainMealsService } from './future-main-meals.service';


@Controller('mainmeals')
export class FutureMainMealsController {
constructor(
    private mainMealService :
    FutureMainMealsService,)
    {}

@Get('all')
getAllMainMeals():Promise <MainOptionEntity[]>
{return this.mainMealService.findAll();}

@Get(':id')
  getMainMeal(
 @Param('id') id:number): Promise<MainOptionEntity>
{return this.mainMealService.getMainMealById(id);}


@Post()
    async createMainMeal(@Body() data: 
    CreateMainMealDto)
    { 
      return await  this.mainMealService.
      createMainMeal(data)
    }

    @Patch(':id')
    async updateVotesOfMainMeal(
      @Param('id') id:number )
      { return await this .mainMealService.
        updateVoteOfMainMeal(id)

      }

      @Patch('/name/:id')
      async updateNameOfMainMeal(
        @Param('id') id:number ,
        @Body() name :UpdateNameMealDto, )
        { return await this .mainMealService.
          updateNameOfMainMeal(name,id)
  
        }

        @Delete(':id')
        async deleteEntryMeal(@Param ('id') id:
         number)
        {
          return await this .mainMealService.deleteMainMeal(id)
        } 



}
