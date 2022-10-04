import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userProfile } from '../interfaces/profileData.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }

  getProfileData():Observable<userProfile[]>{
    return this.http.get<userProfile[]>("http://localhost:3000/register") 
   }

  register(data:any){
    return this.http.post("http://localhost:3000/register",data).subscribe()
  }

  login(data:any){
    return this.http.post("http://localhost:3000/login",data)
  }
}
