import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { result } from '../interfaces/submissionResult.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-secert-research-result',
  templateUrl: './secert-research-result.component.html',
  styleUrls: ['./secert-research-result.component.scss']
})
export class SecertResearchResultComponent implements OnInit {

  constructor( private title:Title, private formbuilder:FormBuilder, private service:GetDataService,
    private route:Router , private generalServ:GeneralService) { }


  researchCheck_result:result[]=[]

 // boolean variables for show save or update Btn
  show_btn_Save_ResearchResult:boolean=false;
  show_btn_Update_ResearchResult:boolean=false;



  // ------ form builder variables -------
  researchResult=this.formbuilder.group({
    researchTitle:["",Validators.required],
    text:["",Validators.required],
    userId:["",Validators.required],
  })


  ngOnInit(): void {
    this.title.setTitle("secretary research Result")
    this.service.getresultData().subscribe(data =>{
      this.researchCheck_result=data
    })
  }


  
  // ------------------------- send & update research result -------------------------
  foraddResearchResultL(){
    this.show_btn_Save_ResearchResult=true;
    this.show_btn_Update_ResearchResult=false;
  }
  saveResearchResult(){
    this.service.addResearchResult(this.researchResult.value)
    window.location.reload()
  }
  
  item_For_Update_ResearchResult:result={}  /* *********** */
  forupdateResearchResult(item:any){
    this.show_btn_Save_ResearchResult=false;
    this.show_btn_Update_ResearchResult=true;

    this.item_For_Update_ResearchResult=item; /* *********** */
    this.researchResult.patchValue({
      researchTitle:item.researchTitle,
      text:item.text,
      userId:item.userId
    })
  }
  updateResearchResult(){
    this.service.updateResearchResult(this.item_For_Update_ResearchResult.id!,this.researchResult.value)
    window.location.reload()
  }
  //----------------------------------------------------------------------------

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
