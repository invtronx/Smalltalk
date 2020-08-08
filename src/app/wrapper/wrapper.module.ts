import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';

@NgModule({
  declarations: [WrapperComponent],
  imports: [CommonModule, WrapperRoutingModule, SharedModule],
})
export class WrapperModule {}
