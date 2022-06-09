import {forwardRef, Inject, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {WalletEntity} from "./entity/wallet.entity";
import {UserService} from "../user/user.service";

@Injectable()
export class WalletService {

    constructor(@InjectRepository(WalletEntity) private walletRepository : Repository<WalletEntity>,
                @Inject(forwardRef(() => UserService)) private readonly userService: UserService,) {
    }


    async createWallet(): Promise<WalletEntity>{
        // const wallet = new WalletEntity();
        // //wallet.user.id = userId;
        // //wallet.balance = 0;
        // //return this.walletRepository.save(wallet);
        // wallet.user.id = userId;
        // wallet.balance = 0;

        const newWallet = this.walletRepository.create();
        return await this.walletRepository.save(newWallet);
      }

    async findWalletByUserId(userId: number) : Promise<WalletEntity> {
        const user = await this.userService.findUserById(userId)
        return await this.walletRepository.findOneBy({
            "id": user.walletId
        })
    }

    async buyTicket (id : number, ticketNumber : number) {
        // here we gonna use the api of paying
        return this.updateBalance(id,ticketNumber,true)
    }

    verifyWalletBalance (wallet : WalletEntity, amount : number): boolean{
        return wallet.balance>=amount ;
    }

    async updateBalance(userId: number , amount: number , transactionType : boolean ){
        const wallet=await this.findWalletByUserId(userId)
        if (!transactionType){
            if (this.verifyWalletBalance(wallet,amount)){
                wallet.balance-=amount
                return this.walletRepository.save(wallet)
            }else {
                throw new NotFoundException("balance error! ")
            }
        }else {
            wallet.balance+=amount
            return this.walletRepository.save(wallet)
        }
    }

}
