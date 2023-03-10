import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class BrandInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(request);
  }

  // addAuthToken(request: HttpRequest<any>) {
  //   const token = this.authService.getToken()

  //   return request.clone({
  //     setHeaders: {
  //       Authorization: `Basic ${token}`
  //     }
  //   })
  // }


}
