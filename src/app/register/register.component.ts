import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { checkpass } from '../validators/checkpass.validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router , private formBuilder:FormBuilder,private title:Title,
              private authService:AuthService,private taostr:ToastrService) { }

  // form gruob variable
  userRegist=this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',[Validators.required,Validators.minLength(6)]],
    phone:['',[Validators.required,Validators.minLength(10)]],
    faculty:['',Validators.required]

  })

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
  setData(){
    // check form validate
    if(this.userRegist.valid && this.password?.value==this.confirmPassword?.value){
        this.authService.register(this.userRegist.value)
        this.route.navigate(['']) 
        this.taostr.success("Successfully", "Sign Up" ,{
          positionClass:'toast-top-right'
        })
    }else{
      this.taostr.error( " please enter valid data")

    }
  }

}
