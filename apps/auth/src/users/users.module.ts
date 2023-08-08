import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DatabaseModule } from '@app/common';
import { UserDocument, UserSchema } from './model/user.schema';
import { UsersService } from './users.service';
import { UserRepository } from './users.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
  ],
})
export class UsersModule {}
