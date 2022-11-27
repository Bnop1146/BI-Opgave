import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';





@Component({
  selector: 'app-modtagere',
  templateUrl: './modtagere.component.html',
  styleUrls: ['./modtagere.component.scss']
})
export class ModtagereComponent implements OnInit {

  constructor(private service:ApiserviceService, public auth: AuthService, private router:Router) { }

  readData:any;
  getparamid:any;
  successmsg:any;

  ngOnInit(): void {
    this.service.nyhedsbrevModtagere().subscribe((res)=>{
      console.log(res,"res==>");

      this.readData = res.data;
    });

    this.successmsg = 'Bruger opdateret';
  }
  logout(){
    this.auth.logout();
    console.log()
  }

  opdaterForm = new FormGroup({
    'fornavn': new FormControl('', Validators.required),
    'efternavn': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'tlf': new FormControl('', Validators.required)

  });


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

  opdaterID(id)
  {
   this.service.getSingleData(id).subscribe((res)=>{
    console.log(res,"res==>");
    this.opdaterForm.patchValue({
      fornavn:res.data[0].fornavn,
      efternavn:res.data[0].efternavn,
      email:res.data[0].email,
      tlf:res.data[0].tlf
    })

    this.getparamid = res.data;

   }
  )};

  opdaterModtager(id:any)
  {
    console.log(this.opdaterForm.value, id, 'opdateret modtager');
if (this.opdaterForm.valid){
    this.service.opdaterModtagere(this.opdaterForm.value,id).subscribe((res)=>{
      console.log(res,'resupdated');
      this.opdaterForm.reset();

      
      this.service.nyhedsbrevModtagere().subscribe((res)=>{
        console.log(res,"res==>");
  
        this.readData = res.data;

      });
    });

  }
    
  }

}
