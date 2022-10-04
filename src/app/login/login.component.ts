import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import * as $ from 'jquery';
import { AuthService } from '../services/auth.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginToken:any

  constructor( private route:Router , private formBuilder:FormBuilder,private title:Title , private authService:AuthService) { }

  userLogin=this.formBuilder.group({
    email:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]],
  })

  
  ngOnInit(): void {
    this.title.setTitle("Sign In")
    AOS.init();

  }

  get email(){
    return this.userLogin.get('email')
  }
  get pass(){
    return this.userLogin.get('password')
  }

  // the on submit function
  login(){
    if(this.userLogin.valid){
      this.authService.login(this.userLogin.value).subscribe( result =>{
        if (result != null){
          this.loginToken=result
          localStorage.setItem("token",this.loginToken.jwtToken)
          console.log(this.loginToken)
          this.route.navigate(['/profile'])
        }
      })
      console.log(this.userLogin.value)
    }else{
      alert( " please enter valid data")
    }
  }



}
