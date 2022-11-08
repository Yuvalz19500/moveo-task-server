import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeBlock } from './entities/code-block.entity';
import { CodeBlocksService } from './code-blocks.service';
import { CodeBlocksController } from './code-blocks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CodeBlock])],
  providers: [CodeBlocksService],
  controllers: [CodeBlocksController],
})
export class CodeBlocksModule {}
