import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { about } from '../interfaces/footer.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})
export class AdminAboutComponent implements OnInit {

  aboutArray:about[]=[]

 
  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
    private title:Title , private route:ActivatedRoute , private generalServ:GeneralService) { }


  // ----------------------------------- about ------------------------------------
    about=this.formbuilder.group({
      BigTitle:["", Validators.required],
      sideTitle:["", Validators.required],
      text:["", Validators.required],
    })
  // -------------------------------------------------------------------------------

  ngOnInit(): void {
    this.service.getAbout().subscribe(data => {
      this.aboutArray=data
    })
  }

  
  // ------------------------------- add about ----------------------------
  addAbout(){
    this.service.addAbout(this.about.value)
    window.location.reload()
  }
  //-----------------------------------------------------------------------

  //--------------- update about ----------------
  aboutItem:any={}
  setAbout(item:any){
    this.aboutItem=item;
    this.about.patchValue({
      BigTitle:item.BigTitle,
      sideTitle:item.sideTitle,
      text:item.text,
    })
  }
  aboutUpdate(){
    this.service.updateAbout(this.aboutItem.id!,this.about.value);
    window.location.reload();
  }
  //----------------------------------------------

    
//-------------------------------- show data ---------------------------------------
showItem_bigTitle:any;
showItem_Text:any;
showItem_sideTiTle:any;
showData_image(item:any){
  if(item.photourl==null ){
    this.showItem_bigTitle=item.BigTitle;
    this.showItem_Text=item.text;
    this.showItem_sideTiTle=item.sideTitle;
  }else{
    this.showItem_bigTitle=item.BigTitle;
    this.showItem_Text=item.text;
    this.showItem_sideTiTle=item.sideTitle;
  }
}
//-----------------------------------------------------------------------

// --------------------------- for delete data --------------------------
swalDelete(identify:any , item:any){
  this.generalServ.swalDelete(identify,item.id)
}
//-----------------------------------------------------------------------

}
