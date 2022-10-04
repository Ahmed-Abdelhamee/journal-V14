import { Component, OnInit } from '@angular/core';
import * as $ from "jquery" ;
import * as AOS from "aos" ;
import { Title } from '@angular/platform-browser';
import { GetDataService } from '../services/get-data.service';
import { userProfile, userprofileData } from '../interfaces/profileData.interface';
import { headerData } from '../interfaces/headerData.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerData:headerData={
    journalname:"",
    logoImg:"",
  };
  profileData:userProfile[]=[]

  constructor( private pageTitle:Title, private HeaderServiceData:GetDataService, private authService:AuthService) { }

  pageTitleName(title:string){
    this.pageTitle.setTitle(title)
  }

  ngOnInit(): void {
    // fristly we hide total sidebar div from the stie view  
    $(".sidebarMOBILE").hide(); 


    
    this.HeaderServiceData.getHeaderData().subscribe( data=>{
      this.headerData=data;
    })

    this.authService.getProfileData().subscribe (data=>{
      this.profileData=data
    })

   

      



  }

  showsliderMobile(){
      $(".sidebarMOBILE").show();
  }
  hideMobileSidebar(){
    $(".sidebarMOBILE").hide()
  }
  logout(){
    
  }
}
