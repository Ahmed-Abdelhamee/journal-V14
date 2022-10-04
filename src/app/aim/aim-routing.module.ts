import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AimComponent } from './aim.component';

const routes: Routes = [
  {path:"",component:AimComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AimRoutingModule { }
