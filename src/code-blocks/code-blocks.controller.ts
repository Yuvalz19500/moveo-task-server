import { Controller, Get, Param } from '@nestjs/common';
import { CodeBlocksService } from './code-blocks.service';

@Controller('code-blocks')
export class CodeBlocksController {
  constructor(private codeBlocksService: CodeBlocksService) {}

  @Get()
  async getCodeBlocks() {
    return this.codeBlocksService.findAll();
  }

  @Get(':codeBlockId')
  async getCode(@Param() params) {
    const code = await this.codeBlocksService.findOne({
      where: { id: params.codeBlockId },
      select: ['code'],
    });

    return { code: code.code };
  }
}
