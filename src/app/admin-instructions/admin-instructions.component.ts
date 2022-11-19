import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { instrctions, instrctionsFile } from '../interfaces/instructions.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-admin-instructions',
  templateUrl: './admin-instructions.component.html',
  styleUrls: ['./admin-instructions.component.scss']
})
export class AdminInstructionsComponent implements OnInit {

  // --------------------------------- arrays --------------------------------

  instructionsArray:instrctions[]=[]
  getinstructionsFile:instrctionsFile[]=[]

  instructionsFileURL:any="";

  
  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
    private title:Title , private route:ActivatedRoute , private generalServ:GeneralService) { }


// -------------------------   instructions variables  --------------------------
  instruction=this.formbuilder.group({
    title:["",Validators.required],
    text:["",Validators.required],
  })
  instructionFile=this.formbuilder.group({
    file:["",Validators.required],
  })

// --------------------------------------------------------------------
  


// --------------------------------  show data ------------------------------------
  
  ngOnInit(): void {
    this.title.setTitle("Admin Instructions")

     // get instructions
     this.service.getInsturctions().subscribe(data=>{
      this.instructionsArray=data
    })
    this.service.getInsturctionsFile().subscribe(data=>{
      this.getinstructionsFile=data;
      this.instructionsFileURL=this.getinstructionsFile[0].file
    })
  }

  //------------------------------------------------------------


  //--------------------------- add instructions -----------------------
  addInstructions(){
    console.log(this.instruction.value)
    this.service.addInstructions(this.instruction.value)
    window.location.reload()
  }
//---------------------------------------------------------------------

// -------------------------- update instructions ----------------------
  idInstruction:number=0
  setInstructionID(item:any){
    this.idInstruction=item.id;
    this.instruction.patchValue({
      title:item.title,
      text:item.text,
    })
  }
  updateInstruction(){
    this.service.updateInstruction(this.idInstruction,this.instruction.value)
    window.location.reload()
  }
  updateInstructionFile(){
    this.service.updateInstructionFile(this.instructionFile.value)
    window.location.reload()
  }
//-----------------------------------------------------------------------


//-------------------------------- show data ---------------------------------------
showItem_Text:any;
showItem_TiTle:any;
showData_image(item:any){
    this.showItem_Text=item.text;
    this.showItem_TiTle=item.title;
}
//-----------------------------------------------------------------------

// --------------------------- for delete data --------------------------
swalDelete(identify:any , item:any){
  this.generalServ.swalDelete(identify,item.id)
}
//-----------------------------------------------------------------------


}
