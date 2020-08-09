import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [WrapperComponent, PageNotFoundComponent, AboutComponent],
  imports: [CommonModule, WrapperRoutingModule, SharedModule],
})
export class WrapperModule {}
