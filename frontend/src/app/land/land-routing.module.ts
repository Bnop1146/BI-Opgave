import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandPage } from './land.page';

const routes: Routes = [
  {
    path: '',
    component: LandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandPageRoutingModule {}
