import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, password: string) {
    const user: User = await this.usersService.findOne({
      select: ['username', 'password', 'userType'],
      where: { username },
    });

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (user && passwordsMatch) {
      return user;
    }

    return null;
  }
}