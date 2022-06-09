import { MainOptionEntity } from './entity/mainOptions.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMainMealDto } from './dto/CreateMainMeal.dto';
import { UpdateNameMealDto } from './dto/UpdateNameMeal.dto';
@Injectable()
export class FutureMainMealsService {
    constructor(
        @InjectRepository( MainOptionEntity)
        private  MainMealsRepository :
         Repository <MainOptionEntity>,
    ) {}

async findAll() : Promise<MainOptionEntity []>
{
    return await this. MainMealsRepository.find();

}

async getMainMealById(id: number):
    Promise <MainOptionEntity>
    {
        return await this.MainMealsRepository.findOneBy({id:id})
    }

async createMainMeal(mainMeal :CreateMainMealDto) :
Promise <MainOptionEntity>
{
    const newMain : MainOptionEntity=
    this.MainMealsRepository.create(mainMeal);
    return await this.MainMealsRepository.save(newMain);
}


async updateNameOfMainMeal ( NewName:UpdateNameMealDto,id:number ):
Promise <MainOptionEntity>
{   
    const mainMeal =await this.MainMealsRepository.findOneOrFail( {where :{id}} );
    if (mainMeal)
    {
    mainMeal.name =NewName.name;
    return await  this.MainMealsRepository.save(mainMeal)}
}
async updateVoteOfMainMeal ( id:number ):
Promise <MainOptionEntity>
{
    const mainMeal =await this.MainMealsRepository.findOneOrFail( {where :{id}} );
    if (mainMeal)
     {mainMeal.votes++;
    return await  this.MainMealsRepository.save(mainMeal)}
}
async softDeleteEntry(id :number)
{const mainMeal =await this .MainMealsRepository.findOne({ where: { id: id } });
  if (!mainMeal)
  {  throw new NotFoundException('');}
  else return this.MainMealsRepository.softDelete(id);
}

async retsoreEntry(id:number)
{ const mainMeal= await this.MainMealsRepository.
  query("select * from DessertOptionEntity where id= ?",
  [id]);
  if (!mainMeal)
  {
    throw new NotFoundException('');
  }
  else 
  return this.MainMealsRepository.restore(id);

}
async deleteMainMeal(id:number) 
    { return await this.MainMealsRepository.delete(id)}



}
