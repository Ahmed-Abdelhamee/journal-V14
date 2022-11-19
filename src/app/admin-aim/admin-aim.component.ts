import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { aimdata } from '../interfaces/aimdata.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-admin-aim',
  templateUrl: './admin-aim.component.html',
  styleUrls: ['./admin-aim.component.scss']
})
export class AdminAimComponent implements OnInit {

  
  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
    private title:Title , private route:ActivatedRoute , private generalServ:GeneralService) { }

  // -------------------------   aim variables  --------------------------
  aim =this.formbuilder.group({
    text:["",Validators.required],
  })
  // --------------------------------------------------------------------
  
  aimArray:aimdata[]=[]


  ngOnInit(): void {
    // get aim
    this.service.getAimData().subscribe(data=>{
      this.aimArray=data
    })
  }


  //--------------------------------  add Aim  ---------------------------
  addAim(){
    this.service.addAim(this.aim.value)
    window.location.reload()
  }
  //--------------------------------------------------------------------

  
  // -------------------- update Aim --------------------
  idAim:number=0
  setAim(item:any){
    this.idAim=item.id;
    this.aim.patchValue({
      text:item.text,
    })
  }
  updateAim(){
    this.service.updateAim(this.idAim,this.aim.value)
    window.location.reload()
  }
  //-----------------------------------------------------

  
//-------------------------------- show data ---------------------------------------
showItem_Text:any;
showData_image(item:any){
    this.showItem_Text=item.text;
}
//-----------------------------------------------------------------------

// --------------------------- for delete data --------------------------
swalDelete(identify:any , item:any){
  this.generalServ.swalDelete(identify,item.id)
}
//-----------------------------------------------------------------------

}
