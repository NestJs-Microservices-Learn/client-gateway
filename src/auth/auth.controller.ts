import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';
import { LoginUserDto, RegisterUserDto } from './dto';
import { catchError } from 'rxjs';
import { AuthGuard } from './guards/auth.guard';
import { User } from './decorators';
import { CurrentUserInterface } from './interfaces/current-user.interface';
import { Token } from './decorators';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.client.send('auth.register.user', registerUserDto).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.client.send('auth.login.user', loginUserDto).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @UseGuards(AuthGuard)
  @Get('verify')
  verifyToken(@User() user: CurrentUserInterface, @Token() token: string) {
    // const user = req['user'];
    // const token = req['token'];

    // return this.client.send('auth.verify.user', {}).pipe(
    //   catchError((err) => {
    //     throw new RpcException(err);
    //   }),
    // );

    return { user, token };
  }
}
