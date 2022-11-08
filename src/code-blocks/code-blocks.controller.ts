import { Controller, Get } from '@nestjs/common';
import { CodeBlocksService } from './code-blocks.service';

@Controller('code-blocks')
export class CodeBlocksController {
  constructor(private codeBlocksService: CodeBlocksService) {}

  @Get()
  async getCodeBlocks() {
    return this.codeBlocksService.findAll();
  }
}
