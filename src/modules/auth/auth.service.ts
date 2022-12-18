import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { Auth } from 'src/entities/auth.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    private userRepository: Repository<User>,
  ) {}

  public async createUser(createUserDto: CreateUserDto): Promise<any> {
    try {
      const userExist = await this.authRepository.findOneOrFail({
        where: {
          email: createUserDto.email,
        },
      });

      if (userExist) {
        throw new BadRequestException({
          message: 'user with this email already exist',
        });
      } else {
        const newUser = this.authRepository.create(createUserDto);
        await this.authRepository.save(newUser);

        if (newUser) {
          const { email, phone_number } = newUser;

          const profileExist = await this.userRepository.findOneOrFail({
            where: { email: email },
          });

          if (profileExist) {
            throw new BadRequestException({
              message: 'user profile already exist',
            });
          }

          const userProfile = this.userRepository.create(createUserDto);
          const userProfileCreated = await this.userRepository.save(
            userProfile,
          );

          if (userProfileCreated) {
            return {
              message: 'Artsony account created succesfully',
              user: email,
              phone: phone_number,
            };
          } else {
            throw new BadRequestException({
              message: 'unable to create user profile',
            });
          }
        }
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  login() {
    return { message: 'i loged in' };
  }
}
