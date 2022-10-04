import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { data } from '../interfaces/revision.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-new-researches',
  templateUrl: './new-researches.component.html',
  styleUrls: ['./new-researches.component.scss']
})
export class NewResearchesComponent implements OnInit {

  revisionData:data[]=[]
  
  constructor(private title:Title, private getserviceData:GetDataService) { }

  ngOnInit(): void {
    this.title.setTitle("new researches");

    this.getserviceData.getRevisionData().subscribe(data=>{
      this.revisionData=data
    })
    
  }

  GeneralInformationText1:string=""
  GeneralInformationText2:string=""

  showGeneralInformation(General1:string,General2:string){
    this.GeneralInformationText1=General1
    this.GeneralInformationText2=General2
  }


  comment:string="";
  showComments(comnt:string){
    this.comment=comnt;
  }


  abstract:string="";
  showAbstract(abst:string){
    this.abstract=abst;
  }

  deleteItem(item:any){
    this.getserviceData.delete_from_NewResearch(item.id)
    window.location.reload()
  }
}
