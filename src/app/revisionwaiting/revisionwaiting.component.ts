import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { data } from '../interfaces/revision.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-revisionwaiting',
  templateUrl: './revisionwaiting.component.html',
  styleUrls: ['./revisionwaiting.component.scss']
})
export class RevisionwaitingComponent implements OnInit {

  revisionData:data[]=[]
  
  constructor(private title:Title, private getserviceData:GetDataService) { }

  ngOnInit(): void {
    this.title.setTitle("waiting revisions");

    this.getserviceData.getRevisionData().subscribe(data=>{
      this.revisionData=data
    })

    
  }

}
