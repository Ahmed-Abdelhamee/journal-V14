import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { profileSettings } from '../interfaces/profileData.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
    private title:Title , private route:ActivatedRoute , private router:Router) { }

  profileSettingsObject:profileSettings={
    text1:"",
    text2:"",
    text3:"",
    text4:"",
    text5:"",
    text6:"",
  }
  // -------------------------  profile variable --------------------------
  profile=this.formbuilder.group({
    text1:["",Validators.required],
    text2:["",Validators.required],
    text3:["",Validators.required],
    text4:["",Validators.required],
    text5:["",Validators.required],
    text6:["",Validators.required],
  })
// -------------------------------------------------------------------------------


  ngOnInit(): void {
    this.service.getProfileSettings().subscribe(data =>{
      this.profileSettingsObject=data
    })
  }

  
  // -------------- update profile -------------
  setProfileValue(){
    this.profile.patchValue({
      text1:this.profileSettingsObject.text1,
      text2:this.profileSettingsObject.text2,
      text3:this.profileSettingsObject.text3,
      text4:this.profileSettingsObject.text4,
      text5:this.profileSettingsObject.text5,
      text6:this.profileSettingsObject.text6,
    })
  }
  updateProfile(){
    this.service.updateProfile(this.profile.value)
    window.location.reload()
  }
  // --------------------------------------------


}
