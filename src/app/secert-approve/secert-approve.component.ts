import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { authoAapprovalFile } from '../interfaces/admin.interface';
import { notes } from '../interfaces/notes.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-secert-approve',
  templateUrl: './secert-approve.component.html',
  styleUrls: ['./secert-approve.component.scss']
})
export class SecertApproveComponent implements OnInit {

  approval : authoAapprovalFile[]=[]

  // boolean variables for show save or update Btn

  show_btn_Save_Note:boolean=false;
  show_btn_Update_Note:boolean=false;

  //-------------------------------------


   // ------ form builder variables -------
   researchNotes=this.formbuilder.group({
    researchTitle:["",Validators.required],
    text:["",Validators.required],
    file:["",Validators.required],
    userId:["",Validators.required],
  })

  //---------------------------------------

  constructor( private title:Title, private formbuilder:FormBuilder, private service:GetDataService,
               private route:Router , private generalServ:GeneralService) { }

  ngOnInit(): void {
    this.service.getAuthoAapprovalFile().subscribe(data=>{
      this.approval=data
    })
  }
  


    // --------------------------------- delete data ------------------------------
    swalDelete(identify:any , id:any){
    this.generalServ.swalDelete(identify,id)
  }

    
    
}
