import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AimRoutingModule } from './aim-routing.module';
import { AimComponent } from './aim.component';


@NgModule({
  declarations: [
    AimComponent
  ],
  imports: [
    CommonModule,
    AimRoutingModule
  ]
})
export class AimModule { }
