import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RightSidebarService} from './service/rightsidebar.service';
import {AuthGuard} from './guard/auth.guard';
import {AuthService} from './service/auth.service';
import {throwIfAlreadyLoaded} from './guard/module-import.guard';
import {DirectionService} from './service/direction.service';
import {AnonymousGuard} from "./guard/anonymous.guard";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [RightSidebarService, AuthGuard, AuthService, DirectionService, AnonymousGuard],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
