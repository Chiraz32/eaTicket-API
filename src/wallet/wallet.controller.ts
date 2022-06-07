import {Controller, Param, ParseIntPipe, Patch} from '@nestjs/common';
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


}
