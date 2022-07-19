import { Component, OnInit } from '@angular/core';
import * as $ from "jquery" ;
import * as AOS from "aos" ;
import { Title } from '@angular/platform-browser';
import { GetDataService } from '../services/get-data.service';
import { userprofileData } from '../interfaces/profileData.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerData:any[]=[];
  profileData:userprofileData[]=[]

  constructor( private pageTitle:Title, private HeaderServiceData:GetDataService) { }

  pageTitleName(title:string){
    this.pageTitle.setTitle(title)
  }

  ngOnInit(): void {
    // fristly we hide total sidebar div from the stie view  
    $(".sidebarMOBILE").hide(); 


    
    this.HeaderServiceData.getHeaderData().subscribe( data=>{
      this.headerData=data;
    })

    this.HeaderServiceData.getProfileData().subscribe (data=>{
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
