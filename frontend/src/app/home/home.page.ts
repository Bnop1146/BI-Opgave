import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ApiserviceService} from '../apiservice.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, private service:ApiserviceService) {}



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
  

}
