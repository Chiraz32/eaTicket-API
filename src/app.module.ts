import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { WalletController } from './wallet/wallet.controller';
import { WalletModule } from './wallet/wallet.module';
import { CurrentMealsService } from './current-meals/current-meals.service';
import { CurrentMealsModule } from './current-meals/current-meals.module';
import { FutureMainMealsController } from './future-main-meals/future-main-meals.controller';
import { FutureMainMealsModule } from './future-main-meals/future-main-meals.module';
import { FutureEntryMealsService } from './future-entry-meals/future-entry-meals.service';
import { FutureEntryMealsModule } from './future-entry-meals/future-entry-meals.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './user/entity/user.entity';
import { WalletEntity } from './wallet/entity/wallet.entity';
import { TransactionEntity } from './transaction/entity/transaction.entity';
import { MainOptionEntity } from './future-main-meals/entity/mainOptions.entity';
import { DessertOptionEntity } from './future-entry-meals/entity/dessertOptions.entity';
import { MealEntity } from './current-meals/entity/meal.entity';

@Module({
  imports: [UserModule, 
    TransactionModule, 
    WalletModule, 
    CurrentMealsModule, 
    FutureMainMealsModule, 
    FutureEntryMealsModule, 
    AuthModule, 
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'eaticket',
        entities: [UserEntity, WalletEntity, TransactionEntity, MainOptionEntity, DessertOptionEntity, MealEntity],
        synchronize: true,
      }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
