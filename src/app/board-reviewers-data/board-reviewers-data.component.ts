import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { reviewers, reviewersGroup } from '../interfaces/board.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-board-reviewers-data',
  templateUrl: './board-reviewers-data.component.html',
  styleUrls: ['./board-reviewers-data.component.scss']
})
export class BoardReviewersDataComponent implements OnInit {

  constructor(private service:GetDataService, private route:ActivatedRoute) { }
  
  groubName:any="";
  reviewersGroup:reviewersGroup[]=[];
  Find_reviewersGroup:reviewersGroup={};

  loading:Boolean=false;


  // reviewerData:reviewers[]=[];

  ngOnInit(): void {
    this.groubName=this.route.snapshot.paramMap.get("groubName");

    this.loading=true 
    
    this.service.getBoardReviewer().subscribe( data =>{
      this.reviewersGroup=data;

      this.Find_reviewersGroup=this.reviewersGroup.find(item => item.groupName== this.groubName)!;
    })

    this.loading=false 

  }

}
