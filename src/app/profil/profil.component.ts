import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  urlParams: any = {};
  profilLog: boolean = false;

  constructor(private route: ActivatedRoute,
    private service: ApiserviceService) { }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    const id = this.route.snapshot.queryParamMap.get('id');
    this.service.profil(id).subscribe(()=>{
      console.log("succes");
      this.profilLog = true;
    }, err =>{
      console.log(err);
      this.profilLog = false;
    });

  }





}
