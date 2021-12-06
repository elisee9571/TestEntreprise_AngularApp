import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.log(err)  
    };

    this.service.login(f.value).subscribe(loginObserver);
    
  }

}
