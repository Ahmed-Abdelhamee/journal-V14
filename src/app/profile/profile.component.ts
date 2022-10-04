import { Component, OnInit } from '@angular/core';
import { profileSettings, userProfile, userprofileData } from '../interfaces/profileData.interface';
import { AuthService } from '../services/auth.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  // get array data from json file
  profileData:userProfile[]=[];

  // get array data locally
  profileTexts:profileSettings={
    text1:"",
    text2:"",
    text3:"",
    text4:"",
    text5:"",
    text6:"",
  }

  constructor(private getData:GetDataService , private userAuth:AuthService) { }

  ngOnInit(): void {
    this.userAuth.getProfileData().subscribe(data=>{
      this.profileData=data;
    })
    this.getData.getProfileSettings().subscribe(data=>{
      this.profileTexts=data
    })
  }

}
