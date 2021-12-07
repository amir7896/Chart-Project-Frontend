import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private _httpClient: HttpClient,
    private router: Router) { }


  registerNewUser(data:any){
    return this._httpClient.post<any>('http://localhost:3000/register', data)
  }

  loginUser(data:any){
    return this._httpClient.post<any>('http://localhost:3000/login', data)
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/dashboard']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
  //password forget route
  resetPassword(data:any){
    return this._httpClient.post('http://localhost:3000/resetPass/forget',data)
  }
  //get token for password reset
  gettokenForReset(token: any){
    return this._httpClient.get('http://localhost:3000/resetPass/reset'+token)
  }
  changeUserPassword(token: any,data:any){
    return this._httpClient.post('http://localhost:3000/resetPass/reset/:'+token ,data);
  }
}
