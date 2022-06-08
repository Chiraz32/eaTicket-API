import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletAddDto } from './dto/wallet-add.dto';
import { WalletEntity } from './entity/wallet.entity';

@Controller('wallet')
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Patch('/:id/:ticketsNumber')
  async buyTicket(
    @Param('id', ParseIntPipe) id,
    @Param('ticketsNumber', ParseIntPipe) ticketsNumber,
  ) {
    return this.walletService.buyTicket(id, ticketsNumber);
  }
  @Post()
  createWallet(@Body() walletData: WalletAddDto): Promise<Partial<WalletEntity>> {
    return this.walletService.createWallet(walletData.userId);
  }
}
