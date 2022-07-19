import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { aimdata } from '../interfaces/aimdata.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-aim',
  templateUrl: './aim.component.html',
  styleUrls: ['./aim.component.scss']
})
export class AimComponent implements OnInit {

  constructor(private getAimDataService:GetDataService,private title:Title) { }

  aimData:aimdata[]=[];

  ngOnInit(): void {
    this.title.setTitle("Aim and Scope")
    
    this.getAimDataService.getAimData().subscribe(data=>{
      this.aimData=data;
    })
  }

}
