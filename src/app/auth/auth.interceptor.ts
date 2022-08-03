import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const idToken = this.authService.getToken();
    const cloned = request.clone({
      headers: idToken ? request.headers.set('Authorization',
          'Bearer ' + idToken) : request.headers
    });
    return next.handle(cloned).pipe(
      catchError(response => {
        if(response instanceof HttpErrorResponse){
          console.log(response);
          if (response.status === 401) {
            this.router.navigate(['login']);
          }
        }
        return throwError(response);
       })
    );
  }
}
