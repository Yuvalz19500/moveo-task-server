import { Controller, Get } from '@nestjs/common';
import { UserType } from './entities/user-type.enum';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('students')
  async getStudents() {
    return this.usersService.findAll({
      where: { userType: UserType.STUDENT },
    });
  }
}
