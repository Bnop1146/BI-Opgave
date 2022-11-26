import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-opdater',
  templateUrl: './opdater.component.html',
  styleUrls: ['./opdater.component.scss'],
})
export class OpdaterComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('id'),'getid')
  }

}
