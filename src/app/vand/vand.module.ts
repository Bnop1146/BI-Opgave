import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VandPageRoutingModule } from './vand-routing.module';

import { VandPage } from './vand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VandPageRoutingModule
  ],
  declarations: [VandPage]
})
export class VandPageModule {}
