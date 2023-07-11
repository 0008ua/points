// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AdminGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const user = request.user;
//     console.log('user+', user);

//     return true;
//   }
// }

// import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';

// @Injectable()
// export class AdminGuard extends AuthGuard('jwt') {
//   canActivate(context: ExecutionContext) {
//     // Add your custom authentication logic here
//     // for example, call super.logIn(request) to establish a session.
//     const request = context.switchToHttp().getRequest();
//     const user = request.user;
//     console.log('user+', user);
//     return super.canActivate(context);
//   }

//   handleRequest(err, user, info) {
//     // You can throw an exception based on either "info" or "err" arguments
//     if (err || !user) {
//       throw err || new UnauthorizedException();
//     }
//     return user;
//   }
// }
