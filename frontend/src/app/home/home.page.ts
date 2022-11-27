import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import {ApiserviceService} from '../apiservice.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthService, private router:Router , private service:ApiserviceService) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if(isAuthenticated) {
        this.router.navigate(['/energi']);
      }
    });
  }



  goToHome() {
    this.navCtrl.navigateForward('Home');
  }

  goToEnergi() {
    this.navCtrl.navigateForward('Energi');
  }

  goToVand() {
    this.navCtrl.navigateForward('Vand');
  }
  
  goToLand() {
    this.navCtrl.navigateForward('Land');
  }

  login(){
    this.auth.loginWithRedirect();
    console.log()
  }
  

}
