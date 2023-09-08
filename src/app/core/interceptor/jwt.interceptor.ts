import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  excludeUrls = ['.*/authenticate', '.*/register', '.*/forgetPassword']

  constructor(private authenticationService: AuthService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isValidRequestForInterceptor(request.url)) {
      const currentUser = this.authenticationService.currentUserValue;

      if (currentUser && currentUser.token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        });
      }
    }

    return next.handle(request);
  }

  private isValidRequestForInterceptor(requestUrl: string): boolean {
    const positionIndicator = 'api/';
    const position = requestUrl.indexOf(positionIndicator);
    if (position > 0) {
      for (const address of this.excludeUrls) {
        if (new RegExp(address).test(requestUrl)) {
          return false;
        }
      }
    }
    return true;
  }
}
