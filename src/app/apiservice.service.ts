import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  userData: any = [];
  

  constructor(private http: HttpClient, private router: Router) { }

  // connect backend

  apiUrl = 'http://localhost:3000/users';

  // get all userData
  getAllData(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  // login user
  login(model:any){
    return this.http.post(`${this.apiUrl}/login`, model).pipe(
      map((res: any) => {
        let user = res;
        if(user.token){
          localStorage.setItem('token', user.token)
          localStorage.setItem('id', user.id)
          console.log(user);
          this.router.navigateByUrl('/profil');
        }
      })
    )
  }

  // register user
  register(model:any){
    return this.http.post(`${this.apiUrl}/register`, model).pipe(
      map((res: any)=>{
        let user = res;
        console.log(user);
        this.router.navigateByUrl('/login');
      })
    );
  }

  // update user
  update(model:any, id:string){
    return this.http.put(`${this.apiUrl}/update/${id}`, model).pipe(
      map((res: any)=>{
          localStorage.setItem("token", res.data.token);
      })
    );  
  }
}
