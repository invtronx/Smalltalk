import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { PortalRoutingModule } from './portal-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PortalComponent } from './portal/portal.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PortalComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, SharedModule, CoreModule, PortalRoutingModule],
  exports: [PortalComponent],
})
export class PortalModule {}
