import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TransactionEntity} from "./entity/transaction.entity";
import {Repository} from "typeorm";
import {CreateTransactionDto} from "./dto/create-transaction.dto";
import {WalletService} from "../wallet/wallet.service";
import {UserService} from "../user/user.service";

@Injectable()
export class TransactionService {

    constructor(
        @InjectRepository(TransactionEntity) private transactionRepository : Repository<TransactionEntity>,
        private walletService : WalletService,
        private userService : UserService

    ) {
    }

     async createTransaction (createTransactionDto : CreateTransactionDto){
        const sender = await this.userService.findUserById(createTransactionDto.senderId);
        const reciever = await this.userService.findUserById(createTransactionDto.recieverId);
        await this.walletService.updateBalance(createTransactionDto.senderId,createTransactionDto.amount,false)
        await this.walletService.updateBalance(createTransactionDto.recieverId,createTransactionDto.amount,true)
        return  this.transactionRepository.save(createTransactionDto)
    }


    async getTransactions (): Promise <TransactionEntity[]>{
        return await this.transactionRepository.find();
    }

    async getTransactionById(id: number): Promise <TransactionEntity[]>{
        const qb = this.transactionRepository.createQueryBuilder("transactions");
        return await qb.select()
          .where("transactions.senderId = :id" ,{id: id})
          .orWhere("transactions.recieverId = :id",{id: id})
          .getMany();
    }

}
