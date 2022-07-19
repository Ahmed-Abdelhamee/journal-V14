import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { result } from '../interfaces/submissionResult.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-revisioncheck',
  templateUrl: './revisioncheck.component.html',
  styleUrls: ['./revisioncheck.component.scss']
})
export class RevisioncheckComponent implements OnInit {

  constructor(private title:Title , private getServiceData:GetDataService) { }

  result:result[]=[];

  ngOnInit(): void {
    this.title.setTitle("revision")

    this.getServiceData.getresultData().subscribe( data =>{
      this.result=data
    })
  }

}
