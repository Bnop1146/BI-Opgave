import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public navCtrl: NavController) {}

  goToHome() {
    this.navCtrl.navigateForward('home');
  }
  goToEnergi() {
    this.navCtrl.navigateForward('energi');
  }
}
