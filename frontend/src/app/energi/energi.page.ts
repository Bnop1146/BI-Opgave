import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-energi',
  templateUrl: './energi.page.html',
  styleUrls: ['./energi.page.scss'],
})
export class EnergiPage implements OnInit {

  constructor(public auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    console.log()
  }

}
