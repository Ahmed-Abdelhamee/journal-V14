import { Component, OnInit } from '@angular/core';
import { userprofileData } from '../interfaces/profileData.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  // get array data from json file
  profileData:userprofileData[]=[];

  // get array data locally
  profileTexts:string[]=["Submit new manuscript.",
                        "Submission waiting for author’s approval.",
                        "Submission sent back to author.",
                        "Submission needing revision.",
                        "Revisions sent back to author.",
                        "Submissions with a decision."]

  constructor(private getData:GetDataService) { }

  ngOnInit(): void {
    this.getData.getProfileData().subscribe(data=>{
      this.profileData=data;
    })
  }

}
