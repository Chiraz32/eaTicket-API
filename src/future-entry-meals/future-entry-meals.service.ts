import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntryMealDto } from './dto/CreateEntryMeal.dto';
import { UpdateNameMealDto } from './dto/UpdateNameMeal.dto';
import { DessertOptionEntity } from './entity/dessertOptions.entity';
@Injectable()
export class FutureEntryMealsService {
   constructor(
       @InjectRepository(DessertOptionEntity )
       private  entrymealsRepository :
        Repository <DessertOptionEntity>,
   ) {}

   async findAll(): Promise<DessertOptionEntity[]> {
    return await this.entrymealsRepository.find();
  }

   async getEntryMealById(id:number): 
   Promise <DessertOptionEntity>{
    return await this .entrymealsRepository.findOneBy( {id:id}) ;
   }

   async createEntryMeal(entry: CreateEntryMealDto):
   Promise <DessertOptionEntity>{
       const newEntry : DessertOptionEntity = 
       this.entrymealsRepository.create(entry);
       return await this.entrymealsRepository.save(newEntry)
;   }
    
    async updateVoteOfEntryMeal
    (id:number) :
    Promise < DessertOptionEntity> {
      const entryMeal =await this.entrymealsRepository.findOneOrFail( {where :{id}} );
      if (entryMeal)
     
      {entryMeal.votes ++;
      return  await this.entrymealsRepository.save(entryMeal)}
    }
 
    async updateNameOfEntryMeal
    (NewName:UpdateNameMealDto,id :number):
    Promise <DessertOptionEntity> 
    {
      const entryMeal =await this.entrymealsRepository.findOneOrFail( {where :{id}} );
      if (entryMeal)
     
         {entryMeal.name=NewName.name;

        return await this.entrymealsRepository.save(entryMeal)}
    }
     
    async softDeleteEntry(id :number)
    {const entry =await this .entrymealsRepository.findOne({ where: { id: id } });
      if (!entry)
      {  throw new NotFoundException('');}
      else return this.entrymealsRepository.softDelete(id);
    }
 
    async retsoreEntry(id:number)
    { const entry= await this.entrymealsRepository.
      query("select * from DessertOptionEntity where id= ?",
      [id]);
      if (!entry)
      {
        throw new NotFoundException('');
      }
      else 
      return this.entrymealsRepository.restore(id);

    }



    async deleteEntry(id:number) 
    { return await this.entrymealsRepository.delete(id)}

}



