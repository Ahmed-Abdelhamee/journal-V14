import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { researchDetails } from '../interfaces/research.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-research-details',
  templateUrl: './research-details.component.html',
  styleUrls: ['./research-details.component.scss']
})
export class ResearchDetailsComponent implements OnInit {

  constructor(private title:Title,private service:GetDataService,private route:ActivatedRoute) { }

  researches_Details:researchDetails[]=[]

  researchDetails:researchDetails={};

  ngOnInit(): void {
    this.title.setTitle("research details");

    let id:any = this.route.snapshot.paramMap.get("id");

    this.service.getresearchDetails().subscribe(data=>{
      this.researches_Details=data;

      this.researchDetails=this.researches_Details[id]
    })
    
  }

}
