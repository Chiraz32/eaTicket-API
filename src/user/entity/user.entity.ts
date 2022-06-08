import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WalletEntity } from '../../wallet/entity/wallet.entity';
import { TransactionEntity } from '../../transaction/entity/transaction.entity';
import { MealEntity } from '../../current-meals/entity/meal.entity';
import { DessertOptionEntity } from '../../future-entry-meals/entity/dessertOptions.entity';
import { MainOptionEntity } from '../../future-main-meals/entity/mainOptions.entity';
import { TimeStampEntities } from '../../TimeStamp/TimeStampEntities';
import { UserRoleEnum } from '../../enum/user-role.enum';

@Entity('user')
export class UserEntity extends TimeStampEntities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 50,
  })
  firstname: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ enum: UserRoleEnum, type: 'enum', default: UserRoleEnum.USER })
  role: string;

  @Column()
  walletId;

  @OneToOne((type) => WalletEntity, (wallet) => wallet.user)
  @JoinColumn({
    name: 'walletId',
  })
  wallet: WalletEntity;

  @OneToMany((type) => TransactionEntity, (transaction) => transaction.sender)
  sendingTransactions: TransactionEntity[];

  @OneToMany((type) => TransactionEntity, (transaction) => transaction.reciever)
  recievingTransactions: TransactionEntity[];

  @ManyToMany((type) => MealEntity, (meal) => meal.users)
  @JoinTable()
  meals: MealEntity[];

  @ManyToMany((type) => DessertOptionEntity, (dessert) => dessert.users)
  @JoinTable()
  dessertOptions: DessertOptionEntity[];

  @ManyToMany((type) => MainOptionEntity, (main) => main.users)
  @JoinTable()
  mainOptions: MainOptionEntity[];
}
