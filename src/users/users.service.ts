import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async findOne(options: FindOneOptions<User>) {
    return this.usersRepo.findOne(options);
  }

  async findAll(options: FindManyOptions<User>) {
    return this.usersRepo.find(options);
  }
}
