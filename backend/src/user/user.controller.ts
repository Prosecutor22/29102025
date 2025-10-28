import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const result = await this.userService.register(createUserDto);
      return {
        success: true,
        statusCode: HttpStatus.CREATED,
        ...result,
      };
    } catch (error) {
      throw error;
    }
  }
}