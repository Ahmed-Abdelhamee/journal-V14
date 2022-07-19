import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import * as $ from 'jquery';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private route:Router , private formBuilder:FormBuilder,private title:Title) { }

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
  getData(data:any){
    // check input validate
    if(data.valid){
    console.log(this.userLogin.value)
    console.log(data.value);
      // this.successAlert()
    }else{
      // this.erroralert()
    }
  }


//success alert code for true --------
  // successAlert(){

  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: 'Login Successfully , Welcome Sir',
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //     },
  //   }).then((result:any)=>{
  //     if(result.isConfirmed){
  //       this.route.navigate(["/"])
  //     }
  //   })
  // }
//------------------------------------



  // error alert code for false------
  // erroralert(){

  //   Swal.fire({
  //     position: 'center',
  //     icon: 'error',
  //     title: 'please enter valid data',
  //     showConfirmButton: false,
  //     showCancelButton:true,
  //     cancelButtonText:"OK",
  //     confirmButtonColor:"btn btn-danger",
  //     customClass:{
  //       cancelButton:"btn btn-danger"
  //     }
  //   })
  // }
  //---------------------------------
}
