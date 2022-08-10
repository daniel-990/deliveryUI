import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from '../models/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getLoginUser(): Observable<any>{
    let response = this.httpClient
    .get('https://localhost:7005/api/Cliente')
    .pipe(map((x: any)=>{
      let loginUsers: Login[] = [];
      for(let loginUser of x){
        let todoLoginUser: Login = {
          email: loginUser.email,
          pass: loginUser.contrasena
        };
        loginUsers.push(todoLoginUser);
      }
      return loginUsers;
    }));
    return response;
  }
}
