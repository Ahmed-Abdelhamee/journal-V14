import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';
import { checkpass } from '../validators/checkpass.validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router , private formBuilder:FormBuilder,private title:Title) { }

  // form gruob variable
  userRegist=this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',Validators.required],
    phone:['',[Validators.required,Validators.minLength(10)]],
    faculty:['',Validators.required]

  },{Validators:[checkpass]})

  // get form groub functions
  get name(){
    return this.userRegist.get("name")
  }
  get email(){
    return this.userRegist.get("email")
  }
  get password(){
    return this.userRegist.get("password")
  }
  get confirmPassword(){
    return this.userRegist.get("confirmPassword")
  }
  get phone(){
    return this.userRegist.get("phone")
  }
  get faculty(){
    return this.userRegist.get("faculty")
  }

  ngOnInit(): void {
    this.title.setTitle("Sign Up")
  }

  // --------- the array for saving data ----------
  saveData:any[]=[{
    name:"",
    email:"",
    password:"",
    phone:"",
    faculty:""
  },
  ]

 
  // ---------- the alert msg variable ----------
  msg:string='Sign Up Successfully ';

  // variable for check password and confirm password are equal 
   passChecker:boolean=false;

  // -------- function for check password and confirm paswword are equal -----------
  checkPass(){
    if(this.password?.value!=this.confirmPassword?.value){
      this.passChecker=true
    }else{
      this.passChecker=false
    }
  }

  // ------------  submit function ------------
  setData(data:any){
    let values=data.value;

    // check form validate
    if(data.valid){

        // save the entered data  
        this.saveData.push({
          name:this.name?.value,
          email:this.email?.value,
          password:this.password?.value,
          phone:this.phone?.value,
          faculty:this.faculty?.value
        })
        console.log(this.saveData) ;

        // this.successalert(); // call the successalert function

    }else{
      this.msg='Please check your data is entered correctly'; // msg text of the error
      // this.erroralert()  // call the erroralert function
    }
  }


  // // the alert success function for true 
  // successalert(){
  //   this.msg='Sign Up Successfully '; // the success msg
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: this.msg,
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //     },
  //     // footer: '<a href="">ok</a>'
  //   }).then((result:any)=>{
  //     if(result.isConfirmed){
  //       this.route.navigate(["/"])
  //     }
  //   })
  // }


  // // the alert error function for false 
  // erroralert(){
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'error',
  //     title: this.msg,
  //     showConfirmButton: false,
  //     // timer: 5000
  //     customClass: {
  //       cancelButton: 'btn btn-danger',
  //     },
  //     showCancelButton: true,
  //     cancelButtonText: 'OK',
  //   })
  // }
}
