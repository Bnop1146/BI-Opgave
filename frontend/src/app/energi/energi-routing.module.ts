import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnergiPage } from './energi.page';

const routes: Routes = [
  {
    path: '',
    component: EnergiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergiPageRoutingModule {}
