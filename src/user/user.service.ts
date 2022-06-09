import {forwardRef, Inject, Injectable, NotFoundException} from '@nestjs/common';
import {UserEntity} from "./entity/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { CreateUserDto } from './dto/createUser.dto';
import { WalletService } from 'src/wallet/wallet.service';
import { WalletEntity } from 'src/wallet/entity/wallet.entity';
import e from 'express';
import { CrudService } from 'src/generics/service/crud.service';


@Injectable()
export class UserService extends CrudService<UserEntity>{

    
    constructor(
            
            @InjectRepository(UserEntity) private userRepository : Repository<UserEntity>,
            @Inject(forwardRef(() => WalletService)) private readonly walletService: WalletService,) {
                super(userRepository);
    }

    async findUserById(userId: number): Promise<UserEntity>{
        const user= await this.userRepository.findOneBy({
            "id": userId
        })
        if (!user){
            throw new NotFoundException(`the user with id : ${userId} does not exist`)
        }
        return user
    }


    async createUser(createUderDto: CreateUserDto): Promise<UserEntity> {
        const newWallet = await this.walletService.createWallet();
        const newUser = await this.userRepository.create({
            ... createUderDto,
            wallet: newWallet
        });
        return await this.userRepository.save(newUser);
    }

    async getAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }


}
