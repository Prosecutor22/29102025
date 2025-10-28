import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<{ message: string; user: { id: string; email: string; createdAt: Date } }> {
    const { email, password } = createUserDto;

    try {
      // Check if user already exists
      const existingUser = await this.userModel.findOne({ email }).exec();
      if (existingUser) {
        throw new ConflictException('User with this email already exists');
      }

      // Hash password
      const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create new user
      const newUser = new this.userModel({
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      // Return response without password
      return {
        message: 'User registered successfully',
        user: {
          id: savedUser._id.toString(),
          email: savedUser.email,
          createdAt: savedUser.createdAt,
        },
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      
      // Handle MongoDB duplicate key error
      if (error.code === 11000) {
        throw new ConflictException('User with this email already exists');
      }

      console.error('Registration error:', error);
      throw new InternalServerErrorException('Failed to register user');
    }
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }
}