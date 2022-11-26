import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ApiserviceService} from '../apiservice.service'

@Component({
  selector: 'app-nyhedsbrev',
  templateUrl: './nyhedsbrev.component.html',
  styleUrls: ['./nyhedsbrev.component.scss'],
})

export class NyhedsbrevComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  errormsg:any;
  ngOnInit() {}

  nyhedsbrevForm = new FormGroup({
    'fornavn': new FormControl('', Validators.required),
    'efternavn': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'tlf': new FormControl('', Validators.required)

  });

  nyhedsbrevSubmit() 
  {
    if(this.nyhedsbrevForm.valid)
    {
      console.log(this.nyhedsbrevForm.value)
      this.service.opretNyhedsbrev(this.nyhedsbrevForm.value).subscribe((res)=>{
        console.log(res, 'res==>');
        this.nyhedsbrevForm.reset();
      });
    }
    else 
    {
      this.errormsg = 'alle felter skal udfyldes!';
    }
    console.log(this.nyhedsbrevForm.value);

  }

}
