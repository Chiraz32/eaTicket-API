import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { WalletService } from '../wallet/wallet.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), WalletService, AuthService],
  controllers: [AuthController],
  providers: [AuthService, WalletService],
})
export class AuthModule {}
