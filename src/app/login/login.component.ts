import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  // login user
  onSubmit(f: NgForm){
    this.service.login(f.value).subscribe(()=>{
      const loginObserver = {
        next: x => console.log('User logged in'),
        error: err => console.log(err)  
      };
      if(loginObserver.next){
        console.log(loginObserver.next);
      } else{
        console.log(loginObserver.error);
      }
    })
    
  }

}
