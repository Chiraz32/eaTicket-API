import { IsNotEmpty, IsString , IsInt} from "class-validator";

export class CreateEntryMealDto
 { @IsNotEmpty()
   @IsString()
    readonly name : string;
    @IsNotEmpty()
    @IsInt()
    readonly votes :number;

}