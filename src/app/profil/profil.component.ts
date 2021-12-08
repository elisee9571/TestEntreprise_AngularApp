import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  // urlParams: any = {};
  // profilLog: boolean = false;

  userData: any = [];

  constructor(private service: ApiserviceService, private router: Router) { }

  // init profil user
  ngOnInit(): void {    
    if(localStorage.getItem("token") === null){
      this.router.navigateByUrl('/login');

    }else{
        this.userData = jwt_decode(localStorage.getItem("token"));
        console.log(this.userData);
    }
  }

  // update profil user
  onSubmit(f: NgForm){
    const id = localStorage.getItem("id");
    // const id = this.userData.id;
    console.log(id);
    
    this.service.update(f.value, id).subscribe(()=>{
      console.log(this.userData);
    })
  }

  // logout profil user
  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('/');
    
  }






}
