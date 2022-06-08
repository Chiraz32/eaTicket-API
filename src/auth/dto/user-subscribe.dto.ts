import { IsEmail, IsNotEmpty, isNumber } from 'class-validator';


export class UserSubscribeDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  firstname: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  phone: number;
  @IsNotEmpty()
  walletId: number;
}
