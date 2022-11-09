import { Body, Controller, Post } from '@nestjs/common';
import { GenerateSessionDto } from './dto/generate-session.dto';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Post()
  async createSession(@Body() generateSessionDto: GenerateSessionDto) {
    const session = await this.sessionsService.create(generateSessionDto);

    const link = `https://yuvalz19500.github.io/moveo-task-client/session/${session.uuid}/${session.student_id}/${session.codeblock_id}`;
    return { link };
  }
}
