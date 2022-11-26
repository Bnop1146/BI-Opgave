import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthModule } from '@auth0/auth0-angular';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule, AuthModule.forRoot({
    domain: 'dev-qimm1nan6el08ivn.us.auth0.com', 
    clientId: 'libKIl2UMCnlMMt3Bo96Akl3f9kp6CeU',
  }),
],
  providers: [ApiserviceService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
