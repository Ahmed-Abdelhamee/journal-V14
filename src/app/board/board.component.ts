import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from "aos";
import { board, reviewers } from '../interfaces/board.interface';

import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private service:GetDataService,private title:Title) { }

  board:board[]=[];
  boardReviewers:reviewers[]=[]

  ngOnInit(): void {
    this.title.setTitle("Editorial Board")

    // get board data
    this.service.getBoard().subscribe(data=>
      this.board=data
    )

    // get reviewers data
    this.service.getBoardReviewer().subscribe( data => {
      this.boardReviewers=data;
    }

    )

    AOS.init()
  }

}
