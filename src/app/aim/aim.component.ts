import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { aimdata } from '../interfaces/aimdata.interface';
import { GetDataService } from '../services/get-data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-aim',
  templateUrl: './aim.component.html',
  styleUrls: ['./aim.component.scss']
})
export class AimComponent implements OnInit {

  constructor(private getAimDataService:GetDataService,private title:Title) { }

  aimData:aimdata[]=[];

  loading:Boolean=false;


  ngOnInit(): void {
    this.title.setTitle("Aim and Scope")

    this.loading=true 
    
    this.getAimDataService.getAimData().subscribe(data=>{
      this.aimData=data;
    })

    this.loading=false ;
  }

}
