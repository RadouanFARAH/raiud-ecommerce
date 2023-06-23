import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  url = environment.url
  constructor(private http:HttpClient) { }

  changePassword(data:any){
    return this.http.post(this.url+"/user/changePassword",data)
  }
  forgotPassword(data:any){
    return this.http.post(this.url+"/user/forgotPassword",data)
  }
}
