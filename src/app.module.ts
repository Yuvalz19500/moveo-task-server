import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CodeBlocksModule } from './code-blocks/code-blocks.module';
import { SessionsModule } from './sessions/sessions.module';
import dataSource from 'ormconfig';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSource.options),
    UsersModule,
    CodeBlocksModule,
    SessionsModule,
  ],
})
export class AppModule {}
