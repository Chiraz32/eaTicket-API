import { Body, Controller, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CurrentMealsService } from './current-meals.service';
import { AddMealDto } from './dto/meal.dto';

@Controller('meals')
export class CurrentMealsController {
    constructor (
        private mealService: CurrentMealsService
    ) {}

    @Get('all')
    getAll() {
        return this.mealService.getAll();
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.mealService.getById(id);
    }

    @Post('add')
    addMeal(@Body() addMealDto:AddMealDto ) {
        return this.mealService.addMeal(addMealDto);
    }

    @Patch(':id')
    updateMeal(@Param('id', ParseIntPipe) id: number,
        @Body() updateMeal:AddMealDto
    ){
        return this.mealService.updateMeal(id,updateMeal)
    }

    @Delete(':id')
    deleteMeal(@Param('id', ParseIntPipe) id: number){
        return this.mealService.removeMeal(id);
    }

    @Patch('rate/:id/:rating')
    rateMeal(@Param('id', ParseIntPipe) id: number, @Param('rating', ParseFloatPipe) rating: number) {
        return this.mealService.rate(id,rating);
    }
}
