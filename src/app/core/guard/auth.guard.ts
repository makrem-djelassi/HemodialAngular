import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("auth.gard")

    if (this.authService.currentUserValue.token) {
      console.log("signin0")
      const userRole = this.authService.currentUserValue.role;
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        console.log("signin1")
        this.router.navigate(['/authentication/signin']);
        return false;
      }
      return true;
    }
    console.log("signin2")

    this.router.navigate(['/authentication/signin']);
    return false;
  }
}
