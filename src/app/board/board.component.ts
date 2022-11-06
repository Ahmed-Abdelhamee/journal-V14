import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from "aos";
import { board, reviewersGroup } from '../interfaces/board.interface';

import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private service:GetDataService,private title:Title) { }

  board:board[]=[];
  boardReviewers:reviewersGroup[]=[];

  loading:Boolean=false;

  ngOnInit(): void {
    this.title.setTitle("Editorial Board")
    this.loading=true 

    // get board data
    this.service.getBoard().subscribe(data=>
      this.board=data
    )

    // get reviewers data
    this.service.getBoardReviewer().subscribe( data => {
      this.boardReviewers=data;
    }

    )
    this.loading=false 

    AOS.init()
  }

}
