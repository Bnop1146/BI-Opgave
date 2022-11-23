import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VandPage } from './vand.page';

const routes: Routes = [
  {
    path: '',
    component: VandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VandPageRoutingModule {}
