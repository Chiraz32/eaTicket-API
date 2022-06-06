import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './entity/transaction.entity';
import {WalletModule} from "../wallet/wallet.module";
import {UserModule} from "../user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity]) , WalletModule, UserModule],
  providers: [TransactionService],
  controllers: [TransactionController]
})
export class TransactionModule {}
