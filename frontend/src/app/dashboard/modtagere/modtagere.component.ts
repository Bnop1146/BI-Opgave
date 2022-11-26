import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../apiservice.service'


@Component({
  selector: 'app-modtagere',
  templateUrl: './modtagere.component.html',
  styleUrls: ['./modtagere.component.scss']
})
export class ModtagereComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;

  ngOnInit(): void {
    this.service.nyhedsbrevModtagere().subscribe((res)=>{
      console.log(res,"res==>");

      this.readData = res.data;
    });
  }

  sletID(id:any)
  {
      console.log(id,'sletID==>');
      this.service.sletModtagere(id).subscribe((res)=>{
        console.log(res,'slettet==>');

        this.service.nyhedsbrevModtagere().subscribe((res)=>{
          console.log(res,"res==>");
    
          this.readData = res.data;
        });
      });
  }

}
