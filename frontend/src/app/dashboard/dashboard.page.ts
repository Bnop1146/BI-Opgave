import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {

  }

}
