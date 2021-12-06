import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  userData: any = [];

  constructor(private http: HttpClient) { }

  // connect backend

  apiUrl = 'http://localhost:3000/users';

  // get all data

  getAllData(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  login(model:any){
    return this.http.post(`${this.apiUrl}/login`, model).pipe(
      map((res: any) => {
        const user = res;
        if(user.message = "Logged In Success"){
          localStorage.setItem('token', user.token)
          localStorage.setItem('id', user.id)

        }
      })
    )
  }

  register(model:any){
    let headers = new HttpHeaders();
    let options = { headers: headers };
    return this.http.post(`${this.apiUrl}/register`, model, options);
  }

  profil(id: string){
    return this.http.get(`${this.apiUrl}/profil/${id}`).pipe(
      map(user => user)
    );
  }
}
