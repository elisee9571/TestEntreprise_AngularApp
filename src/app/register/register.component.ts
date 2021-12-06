import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    const registerObserver = {
      next: x => console.log('User Created'),
      error: err => console.log(err)  
    };

    this.service.register(f.value).subscribe(registerObserver);
    
  }

}
