import { IsNotEmpty, IsString } from "class-validator";

export class UpdateNameMealDto
 {  @IsNotEmpty()
    @IsString()
     readonly name : string;
    

}