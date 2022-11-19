import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { notes } from '../interfaces/notes.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-secert-research-notes',
  templateUrl: './secert-research-notes.component.html',
  styleUrls: ['./secert-research-notes.component.scss']
})
export class SecertResearchNotesComponent implements OnInit {

// boolean variables for show save or update Btn
  show_btn_Save_Note:boolean=false;
  show_btn_Update_Note:boolean=false;

  // ------ form builder variables -------
  researchNotes=this.formbuilder.group({
    researchTitle:["",Validators.required],
    text:["",Validators.required],
    file:["",Validators.required],
    userId:["",Validators.required],
  })

  sendingNotes : notes[]=[]

  constructor( private title:Title, private formbuilder:FormBuilder, private service:GetDataService,
               private route:Router , private generalServ:GeneralService) { }

  ngOnInit(): void {
    this.service.getsubmissioncheck().subscribe(data=>{
      this.sendingNotes=data
    })
  }


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
