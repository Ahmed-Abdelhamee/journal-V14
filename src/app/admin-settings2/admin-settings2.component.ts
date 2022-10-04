import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { authoAapprovalFile } from '../interfaces/admin.interface';
import { complete } from '../interfaces/complete.interface';
import { contact, support } from '../interfaces/footer.interface';
import { notes } from '../interfaces/notes.interface';
import { result } from '../interfaces/submissionResult.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-admin-settings2',
  templateUrl: './admin-settings2.component.html',
  styleUrls: ['./admin-settings2.component.scss']
})
export class AdminSettings2Component implements OnInit {


  //------------ array data  ------------
  approval : authoAapprovalFile[]=[]
  sendingNotes : notes[]=[]
  researchCheck_result:result[]=[]
  completed_researches:complete[]=[]

  
  //-------------------------------------


// ------------- boolean variables  ------------- 
  approvalCheck:boolean=false;
  sendingNotesCheck:boolean=false;
  researchCheck_OR_result_Boolean:boolean=false;
  completed_researches_check:boolean=false;

  //-------------------------------------


 // boolean variables for show save or update Btn
  show_btn_Save_Note:boolean=false;
  show_btn_Update_Note:boolean=false;
  show_btn_Save_ResearchResult:boolean=false;
  show_btn_Update_ResearchResult:boolean=false;

  //-------------------------------------



  // ------ form builder variables -------
  researchNotes=this.formbuilder.group({
    researchTitle:["",Validators.required],
    notes:["",Validators.required],
    userId:["",Validators.required],
  })

  researchResult=this.formbuilder.group({
    researchTitle:["",Validators.required],
    text:["",Validators.required],
    userId:["",Validators.required],
  })

  compeletedResearches=this.formbuilder.group({
    researchTitle:["",Validators.required],
    text:["",Validators.required],
    status:["",Validators.required],
    userId:["",Validators.required],
  })


  //-------------------------------------




  routeId:any;

  constructor( private title:Title, private formbuilder:FormBuilder, private service:GetDataService, private route:Router , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.title.setTitle(" setting2 ")

    this.routeId=this.activatedRoute.snapshot.paramMap.get("id");

    //-------------------------------------  check the show ------------------------------------------

    if(this.routeId=="approval"){
      this.service.getAuthoAapprovalFile().subscribe(data=>{
        this.approval=data
      })
        this.approvalCheck=true;
        this.sendingNotesCheck=false;
        this.researchCheck_OR_result_Boolean=false;
        this.completed_researches_check=false;
    }else if(this.routeId=="sendingNotes"){
      this.service.getsubmissioncheck().subscribe(data=>{
        this.sendingNotes=data
      })
        this.approvalCheck=false;
        this.sendingNotesCheck=true;
        this.researchCheck_OR_result_Boolean=false;
        this.completed_researches_check=false;
        
    }else if(this.routeId=="research-result"){
      this.service.getresultData().subscribe(data =>{
        this.researchCheck_result=data
      })
        this.approvalCheck=false;
        this.sendingNotesCheck=false;
        this.researchCheck_OR_result_Boolean=true;
        this.completed_researches_check=false;
        
    }else if(this.routeId=="compeletedResearch"){
      this.service.getcompleted().subscribe(data =>{
        this.completed_researches=data
      })
        this.approvalCheck=false;
        this.sendingNotesCheck=false;
        this.researchCheck_OR_result_Boolean=false;
        this.completed_researches_check=true;
        
    }
  }
  //----------------------------------------------------------------------------------------------

  // for preparing the code to update 

  // send & update notes
  forSendNotes(){
    this.show_btn_Save_Note=true;
    this.show_btn_Update_Note=false;
  }
  saveNotes(){
    this.service.addNotes(this.researchNotes.value)
    window.location.reload()
  }
  item_For_Update_Notes:notes={}  /* *********** */
  forupdateNotes(item:any){
    this.show_btn_Save_Note=false;
    this.show_btn_Update_Note=true;
    this.item_For_Update_Notes=item;  /* *********** */
    this.researchNotes.patchValue({
      researchTitle:item.researchTitle,
      notes:item.notes,
      userId:item.userId
    })
  }
  updateNote(){
    this.service.updateNotes(this.item_For_Update_Notes.id!,this.researchNotes.value)
    window.location.reload()
  }
  

  // send & update research result
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
  

  // -------------------------- add research result -----------------------
  addCompeletedresearch(){
    this.service.addCompeletedResearches(this.compeletedResearches.value)
    window.location.reload()
  }
  //*********************************************************************** */






  deleteReceipt(id:any){
    this.service.deleteReceipt(id)
    window.location.reload()
  }
  deleteNote(id:any){
    this.service.deleteNotes(id)
    window.location.reload()
  }
  deleteResearchResult(id:any){
    this.service.deleteResearchResult(id)
    window.location.reload()
  }
  deleteCompeletedResearch(id:any){
    this.service.deleteCompeletedResearch(id)
    window.location.reload()
  }
  

}
