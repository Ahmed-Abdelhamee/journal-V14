import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { complete } from '../interfaces/complete.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  constructor(private title:Title, private getDataSevice:GetDataService) { }

  completed:complete[]=[];

  loading:Boolean=false;


  ngOnInit(): void {
    this.title.setTitle("compeleted");

    this.loading=true 

    this.getDataSevice.getcompleted().subscribe(data =>{
      this.completed=data
    })

    this.loading=false 

  }
}
