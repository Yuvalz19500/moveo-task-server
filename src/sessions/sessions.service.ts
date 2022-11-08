import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenerateSessionDto } from './dto/generate-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session) private sessionsRepo: Repository<Session>,
  ) {}

  async create(generateSessionDto: GenerateSessionDto) {
    const session = new Session();

    session.codeblock_id = generateSessionDto.codeblock_id;

    return this.sessionsRepo.save(session);
  }
}
