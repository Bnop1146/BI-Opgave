import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnergiPageRoutingModule } from './energi-routing.module';

import { EnergiPage } from './energi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnergiPageRoutingModule
  ],
  declarations: [EnergiPage]
})
export class EnergiPageModule {}
