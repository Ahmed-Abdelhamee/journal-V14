import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser"
import { ActivatedRoute } from '@angular/router';
import { researchDetails, researches, researchTitle } from '../interfaces/research.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-research-collection',
  templateUrl: './research-collection.component.html',
  styleUrls: ['./research-collection.component.scss']
})
export class ResearchCollectionComponent implements OnInit {

  constructor(private title:Title, private service:GetDataService, private route :ActivatedRoute) { }

  researchGroupTitle:researchTitle[]=[]
  researches:researches[]=[]

  ngOnInit(): void {
    this.title.setTitle("research-collection");

    console.log(this.route.snapshot.paramMap.get("id"))

    this.service.getresearchGroupTitle().subscribe(data=>{
      this.researchGroupTitle=data;
    })
    
    this.service.getresearches().subscribe(data=>{
      this.researches=data
    })
    
  }

}
