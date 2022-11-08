import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CodeBlock } from './entities/code-block.entity';

@Injectable()
export class CodeBlocksService {
  constructor(
    @InjectRepository(CodeBlock) private usersRepo: Repository<CodeBlock>,
  ) {}

  async findAll(options?: FindManyOptions<CodeBlock>) {
    return this.usersRepo.find(options);
  }
}
