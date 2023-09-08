import {Injectable} from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import {AuthService} from '../service/auth.service';
import {Role} from "../models/role";

@Injectable({
  providedIn: 'root',
})
export class AnonymousGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.currentUserValue.resetPasswordToken) {
      const userRole = this.authService.currentUserValue.role;
      if (userRole === Role.Doctor) {
        this.router.navigate(['/doctor/dashboard']);
      }
      else if (userRole === Role.Admin) {
        this.router.navigate(['/admin/dashboard/main']);
      }
      return false;
    }
    return true;
  }
}
