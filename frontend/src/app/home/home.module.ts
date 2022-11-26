import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReadComponent } from '../read/read.component';
import { NyhedsbrevComponent} from '../nyhedsbrev/nyhedsbrev.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ReadComponent, NyhedsbrevComponent],
  declarations: [HomePage, ReadComponent, NyhedsbrevComponent]
})
export class HomePageModule {}
