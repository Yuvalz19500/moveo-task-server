import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { CodeBlock } from './entities/code-block.entity';

@Injectable()
export class CodeBlocksService {
  constructor(
    @InjectRepository(CodeBlock) private codeBlockRepo: Repository<CodeBlock>,
  ) {}

  async findAll(options?: FindManyOptions<CodeBlock>) {
    return this.codeBlockRepo.find(options);
  }

  async findOne(options: FindOneOptions<CodeBlock>) {
    return this.codeBlockRepo.findOne(options);
  }
}
