import {Controller, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
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

    @Post("create")
    async createWallet() {
        return this.walletService.createWallet();
    }


}
