import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  userData = [];

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res);

      this.userData = res.data;
    })
  }

}
