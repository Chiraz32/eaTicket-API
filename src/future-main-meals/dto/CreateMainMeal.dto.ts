import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateMainMealDto
{  @IsNotEmpty()
   @IsString()
   readonly name : string;
   @IsNotEmpty()
   @IsInt()
   readonly votes :number;

}