import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import * as AOS from 'aos'
import { backImg, HomeCarsoulData, homePosts } from '../interfaces/HomeData.interface';
import { GetDataService } from '../services/get-data.service';
import { Title } from '@angular/platform-browser';
import { publishedVolume } from '../interfaces/viewResearches.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeCarousel:HomeCarsoulData[]=[];
  homeData:homePosts[]=[]
  publishReviews:publishedVolume[]=[];
  backImage:backImg={
    backImage:"",
    id:0
  }

  loading:Boolean=false;

  constructor(private getDataSevice:GetDataService,private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("International Journal");

    this.loading=true 

    this.getDataSevice.gethomeCarousel().subscribe(data=>{
      this.homeCarousel=data
    })
    this.getDataSevice.gethomeData().subscribe(data=>{
      this.homeData=data;
    })
    this.getDataSevice.getPublishedVolume().subscribe(data=>{
      this.publishReviews=data;
    })
    this.getDataSevice.getHomeBackImage().subscribe(data=>{
      this.backImage=data;
      console.log(data)
    })

    this.loading=false 
    AOS.init();
  }
}