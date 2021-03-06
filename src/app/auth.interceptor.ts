import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    let authRequest = request.clone({
      headers: new HttpHeaders({  
          Authorization: 'Bearer '+localStorage.getItem('token'),
      })
    });

    // clone: ghi đè
    
    return next.handle(authRequest);
    
    
  }
}
