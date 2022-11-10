import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
      select: ['id', 'username', 'password', 'userType'],
      where: { username },
    });

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (user && passwordsMatch) {
      return user;
    }

    throw new HttpException('Login Failed!', HttpStatus.NOT_FOUND);
  }
}
