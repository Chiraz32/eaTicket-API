import { WalletEntity } from "src/wallet/entity/wallet.entity";

export class CreateUserDto {
    name: string;
    firstname: string;
    eamil: string;
    phone: number;
    wallet: WalletEntity;
}