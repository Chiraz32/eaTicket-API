import {IsNumber} from "class-validator";
import {Type} from "class-transformer";

export class CreateTransactionDto{

    @IsNumber()
    @Type(()=>Number)
    amount : number;

    @IsNumber()
    @Type(()=>Number)
    senderId : number;

    @IsNumber()
    @Type(()=>Number)
    recieverId : number;


}