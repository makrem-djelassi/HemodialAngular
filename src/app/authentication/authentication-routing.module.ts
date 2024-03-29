import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LockedComponent} from './locked/locked.component';
import {Page404Component} from './page404/page404.component';
import {Page500Component} from './page500/page500.component';
import {AnonymousGuard} from "../core/guard/anonymous.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [AnonymousGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AnonymousGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [AnonymousGuard],
  },
  {
    path: 'locked/:token',
    component: LockedComponent,
    canActivate: [AnonymousGuard],
  },
  {
    path: 'page404',
    component: Page404Component,
  },
  {
    path: 'page500',
    component: Page500Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {
}
