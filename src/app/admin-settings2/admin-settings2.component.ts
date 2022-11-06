import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { authoAapprovalFile } from '../interfaces/admin.interface';
import { complete } from '../interfaces/complete.interface';
import { login } from '../interfaces/login.interface';
import { notes } from '../interfaces/notes.interface';
import { register } from '../interfaces/register.interface';
import { result } from '../interfaces/submissionResult.interface';
import { GetDataService } from '../services/get-data.service';

import Swal from 'sweetalert2'


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
  loginArray:login[]=[]
  registerArray:register[]=[]

  
  //-------------------------------------


// ------------- boolean variables  ------------- 
  approvalCheck:boolean=false;
  sendingNotesCheck:boolean=false;
  researchCheck_OR_result_Boolean:boolean=false;
  completed_researches_check:boolean=false;
  login:boolean=false;
  register:boolean=false;

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
    text:["",Validators.required],
    file:["",Validators.required],
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
        this.login=false;
        this.register=false;
    }else if(this.routeId=="sendingNotes"){
      this.service.getsubmissioncheck().subscribe(data=>{
        this.sendingNotes=data
      })
        this.approvalCheck=false;
        this.sendingNotesCheck=true;
        this.researchCheck_OR_result_Boolean=false;
        this.completed_researches_check=false;
        this.login=false;
        this.register=false;
    }else if(this.routeId=="research-result"){
      this.service.getresultData().subscribe(data =>{
        this.researchCheck_result=data
      })
        this.approvalCheck=false;
        this.sendingNotesCheck=false;
        this.researchCheck_OR_result_Boolean=true;
        this.completed_researches_check=false;
        this.login=false;
        this.register=false;
    }else if(this.routeId=="compeletedResearch"){
      this.service.getcompleted().subscribe(data =>{
        this.completed_researches=data
      })
        this.approvalCheck=false;
        this.sendingNotesCheck=false;
        this.researchCheck_OR_result_Boolean=false;
        this.completed_researches_check=true;
        this.login=false;
        this.register=false;
    }else if(this.routeId=="login"){
      this.service.getLoginData().subscribe(data=>{
        this.loginArray=data
      })
      this.approvalCheck=false;
      this.sendingNotesCheck=false;
      this.researchCheck_OR_result_Boolean=false;
      this.completed_researches_check=false;
      this.login=true;
      this.register=false;
    }else if(this.routeId=="register"){
      this.service.getRegisterData().subscribe(data=>{
        this.registerArray=data
      })
      this.approvalCheck=false;
      this.sendingNotesCheck=false;
      this.researchCheck_OR_result_Boolean=false;
      this.completed_researches_check=false;
      this.login=false;
      this.register=true;
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
      text:item.text,
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



// ----------------------------- delete functions -----------------------


swalDelete(identify:any , id:any){
  // ------------------------------------ code for design --------------------------------
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    // buttonsStyling: false,
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You want to remove this item!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel! ',
    reverseButtons: true,
    
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ).then(()=>{
        if(identify=="Receipt"){
          this.deleteReceipt(id)
        }else if(identify=="Note"){
          this.deleteNote(id)
        }else if(identify=="ResearchResult"){
          this.deleteResearchResult(id)
        }else if(identify=="CompeletedResearch"){
          this.deleteCompeletedResearch(id)
        }
      })
      
  }else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}


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
  
//----------------------------------------------------------------------------



  // --------------------------------- show data ------------------------------

  showItem_file:any;
  showItem_Text:any;
  showItem_TiTle:any;
  showData_image(item:any){
      this.showItem_Text=item.text;
      this.showItem_TiTle=item.researchTitle;
      this.showItem_file=item.file;
  }
  
}
