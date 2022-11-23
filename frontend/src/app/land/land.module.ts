import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandPageRoutingModule } from './land-routing.module';

import { LandPage } from './land.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandPageRoutingModule
  ],
  declarations: [LandPage]
})
export class LandPageModule {}
