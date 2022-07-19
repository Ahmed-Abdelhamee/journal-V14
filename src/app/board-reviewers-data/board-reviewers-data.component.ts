import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { reviewers } from '../interfaces/board.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-board-reviewers-data',
  templateUrl: './board-reviewers-data.component.html',
  styleUrls: ['./board-reviewers-data.component.scss']
})
export class BoardReviewersDataComponent implements OnInit {

  constructor(private service:GetDataService, private route:ActivatedRoute) { }
  
  id:any="";
  getData:reviewers[]=[];
  reviewerData:reviewers={};

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");

    this.service.getBoardReviewer().subscribe( data =>{
      this.getData=data;

      this.reviewerData=this.getData[this.id];
      console.log(this.reviewerData)
    })
  }

}
