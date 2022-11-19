import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { complete } from '../interfaces/complete.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-secert-research-completed',
  templateUrl: './secert-research-completed.component.html',
  styleUrls: ['./secert-research-completed.component.scss']
})
export class SecertResearchCompletedComponent implements OnInit {


  // ------ form builder variables -------
  compeletedResearches=this.formbuilder.group({
    researchTitle:["",Validators.required],
    text:["",Validators.required],
    status:["",Validators.required],
    userId:["",Validators.required],
  })

  //-------------------------------------

  completed_researches:complete[]=[]

  constructor( private title:Title, private formbuilder:FormBuilder, private service:GetDataService,
    private route:Router , private generalServ:GeneralService) { }

  ngOnInit(): void {
    this.title.setTitle("secretary research-completed")
    this.service.getcompleted().subscribe(data =>{
      this.completed_researches=data
    })
  }

   // -------------------------- add research result -----------------------
   addCompeletedresearch(){
    this.service.addCompeletedResearches(this.compeletedResearches.value)
    window.location.reload()
  }
  //*********************************************************************** */

 // --------------------------------- delete data ------------------------------

 swalDelete(identify:any , id:any){
  this.generalServ.swalDelete(identify,id)
}

// --------------------------------- show data ------------------------------

showItem_file:any;
showItem_Text:any;
showItem_TiTle:any;
showItem_userId:any;
showData_image(item:any){
    this.showItem_Text=item.text;
    this.showItem_TiTle=item.researchTitle;
    this.showItem_file=item.file;
    this.showItem_userId=item.userId;
}

}
