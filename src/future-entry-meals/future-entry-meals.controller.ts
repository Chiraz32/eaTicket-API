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

import { CreateEntryMealDto } from './dto/CreateEntryMeal.dto';
import { UpdateNameMealDto } from './dto/UpdateNameMeal.dto';
import { DessertOptionEntity } from './entity/dessertOptions.entity';
import { FutureEntryMealsService } from './future-entry-meals.service';

@Controller('entryMeals')
export class FutureEntryMealsController {
    constructor(private entryService : 
      FutureEntryMealsService,) {}
   
    @Get('all')
    getAllEntries(): Promise<DessertOptionEntity[]>
    { return this.entryService.findAll() ; }
   
   
    @Get(':id')
    getEntry(
      @Param('id') id): Promise<DessertOptionEntity> {
      return this.entryService.getEntryMealById(id);
    }
    @Post()
    async createEntry(@Body() data:
     CreateEntryMealDto)
    { 
      return await  this.entryService.
      createEntryMeal(data)
    }

    @Patch(':id')
    async updateVotesOfEntry(
      @Param('id') id:number )
      { return await this .entryService.
        updateVoteOfEntryMeal(id)

      }

     @Patch('/name/:id')
      async updateNameOfEntry(
        @Param('id') id:number ,
        @Body() name :UpdateNameMealDto, )
        { return await this .entryService.
          updateNameOfEntryMeal(name,id)
  
        }

    @Delete(':id')
    async deleteEntryMeal(@Param ('id') id: number)
    {
      return await this .entryService.deleteEntry(id)
    }
    
}
