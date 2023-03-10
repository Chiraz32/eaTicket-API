import { forwardRef, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from './entity/wallet.entity';
import { WalletService } from './wallet.service';
import {WalletController} from "./wallet.controller";
import {UserModule} from "../user/user.module";
import { UserService } from 'src/user/user.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([WalletEntity]), forwardRef(() => UserModule) ],
  controllers : [WalletController],
  providers: [WalletService],
  exports: [WalletService]
})
export class WalletModule {}
