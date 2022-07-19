import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import * as Aos from 'aos'
import { backImg, HomeCarsoulData, homePosts } from '../interfaces/HomeData.interface';
import { review } from '../interfaces/reviewsData.interface';
import { GetDataService } from '../services/get-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeCarousel:HomeCarsoulData[]=[];
  homeData:homePosts[]=[]
  publishReviews:review[]=[];
  backImage:backImg={
    backImage:""
  };


  constructor(private getDataSevice:GetDataService,private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("International Journal");

    

    this.getDataSevice.gethomeCarousel().subscribe(data=>{
      this.homeCarousel=data
    })
    this.getDataSevice.gethomeData().subscribe(data=>{
      this.homeData=data;
    })
    this.getDataSevice.getHomeReviews().subscribe(data=>{
      this.publishReviews=data;
    })
    this.getDataSevice.getHomeBackImage().subscribe(data=>{
      this.backImage=data;
      console.log(data)
    })
  }
}