import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser"
import { ActivatedRoute } from '@angular/router';
import { publishedVolume, research, researchgroupNames } from '../interfaces/viewResearches.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-research-collection',
  templateUrl: './research-collection.component.html',
  styleUrls: ['./research-collection.component.scss']
})
export class ResearchCollectionComponent implements OnInit {

  constructor(private title:Title, private service:GetDataService, private route :ActivatedRoute) { }


  publishReviews:publishedVolume[]=[];

  researchgroupNames:researchgroupNames[]=[]

  research:any[]=[]   // to view the research details


  Published_Id:any=""
  groupClicked:boolean=false;
  viewResearch:boolean=false;

  ngOnInit(): void {
    this.title.setTitle("research-collection");

    console.log(this.route.snapshot.paramMap.get("id"))

    this.Published_Id=this.route.snapshot.paramMap.get("id")

    this.service.getPublishedVolume().subscribe(data=>{
      this.publishReviews=data;
      
      let getPublishedVolume=this.publishReviews.find(item => item.id == this.Published_Id)
      this.researchgroupNames=getPublishedVolume?.researchGroupNames!
    })
    
  }

  showGroup(data:any){
    let arr=[]
    arr.push(data)
    this.researchgroupNames=arr;
    this.groupClicked=true;
  }

  viewResearchFunction(Published:any,researchgroupName:any,title:any){
    let publish=this.publishReviews.find(item => item.id == Published)
    let researchgroup=publish?.researchGroupNames?.find(item=> item.id ==researchgroupName)
    this.research.push(researchgroup?.researches?.find(item => item.title==title));

    this.title.setTitle("research details");
    this.viewResearch=true
  }

  showResearches(){
    this.viewResearch=false;
    this.research=[]
  }
}
