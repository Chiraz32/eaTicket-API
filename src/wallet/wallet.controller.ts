import {Controller, Get, Param, ParseIntPipe, Patch} from '@nestjs/common';
import {WalletService} from "./wallet.service";

@Controller('wallet')
export class WalletController {

    constructor(private walletService: WalletService ) {
    }

    
    @Patch("/:id/:ticketsNumber")
    async buyTicket(@Param('id' ,ParseIntPipe ) id,
                    @Param('ticketsNumber',ParseIntPipe) ticketsNumber
    ) {
        return this.walletService.buyTicket(id,ticketsNumber)
    }

    @Get("/:id")
    async getWalletBalance(
        @Param('id',ParseIntPipe) id
    ){
        return this.walletService.getWallet(id)
    }

}
