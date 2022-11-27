import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  constructor(private service:ApiserviceService, public auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    console.log()
  }

}
