import { IsNotEmpty } from 'class-validator';

export class WalletAddDto {
  @IsNotEmpty()
  balance: number;
  @IsNotEmpty()
  userId: number;
}
