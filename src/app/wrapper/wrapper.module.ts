import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [WrapperComponent, PageNotFoundComponent, AboutComponent],
  imports: [CommonModule, WrapperRoutingModule, SharedModule],
})
export class WrapperModule {}
