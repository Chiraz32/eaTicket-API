import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TransactionService} from "./transaction.service";
import {CreateTransactionDto} from "./dto/create-transaction.dto";

@Controller('transaction')
export class TransactionController {
    constructor(private transactionService : TransactionService) {}
    
    
    @Post()
    async createTransaction(@Body() createTransactionDto : CreateTransactionDto){
        return await this.transactionService.createTransaction(createTransactionDto);
    }

    @Get(':id')
    async getTransactionsById(@Param('id') id:number) {
        return await this.transactionService.getTransactionById(id);
    }
}
