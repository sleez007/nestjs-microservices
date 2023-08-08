import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './users.repository';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  async verifyUser(email: string, password: string) {
    console.log(password);
    const user = await this.userRepository.findOne({ email });
    // const passwordIsValid = await bcrypt.compare(password, user.password);
    // if (!passwordIsValid) {
    //   throw new UnauthorizedException('Credentials are not valid.');
    // }
    return user;
  }

  async getUser(getUserDto: GetUserDto) {
    return this.userRepository.findOne(getUserDto);
  }
}
