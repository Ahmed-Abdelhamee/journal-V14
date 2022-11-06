import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userProfile } from '../interfaces/profileData.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginType:any;

  constructor( private http:HttpClient) { }

  getProfileData():Observable<userProfile[]>{
    return this.http.get<userProfile[]>("http://localhost:3000/register") 
   }

  register(data:any){
    return this.http.post("http://localhost:3000/register",data)
  }

  login(data:any){
    this.loginType="1"

    if(this.loginType=="1"){
      localStorage.setItem("role","admin")
    }else if(this.loginType==""){
      localStorage.setItem("role","secret")
    }else{
      localStorage.setItem("role","secret")
    }
    
    return this.http.post("http://localhost:3000/login",data)
  }
}
