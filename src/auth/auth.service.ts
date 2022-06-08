import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
import { UserEntity } from '../user/entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletService } from '../wallet/wallet.service';
import * as bcrypt from 'bcrypt';
import {LoginCredentialsDto} from "./dto/login-credentials.dto";
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async register(userData: UserSubscribeDto): Promise<Partial<UserEntity>> {
    //const { name, firstname, email, password, phone } = userData;
    const user = this.userRepository.create({ ...userData });
    user.salt = await bcrypt.genSalt();
    // await WalletService.createWallet(user.id);
    console.log(user.salt);
    user.password = await bcrypt.hash(user.password, user.salt);
    try {
      await this.userRepository.save(user);
    } catch (e) {
      throw new ConflictException('Email already exists');
    }
    return {
      id: user.id,
      name: user.name,
      firstname: user.firstname,
      email: user.email,
      phone: user.phone,
      walletId: user.walletId,
    };
  }

  async login(credentials: LoginCredentialsDto): Promise<Partial<UserEntity>> {
    const { email, password } = credentials;
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email ', {
        email,
      })
      .getOne();
    if (!user) {
      throw new NotFoundException('Auth failed');
    }
    const hashedPassword = await bcrypt.hash(password, user.salt);
    if (hashedPassword === user.password) {
      return {
        name: user.name,
        firstname: user.firstname,
        email: user.email,
        phone: user.phone,
      };
    } else {
      throw new NotFoundException('Auth failed');
    }
  }
}
