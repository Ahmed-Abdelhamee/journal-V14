import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { contact } from '../interfaces/footer.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {

  contactArray:contact[]=[]

  // -------------------------------- contact --------------------------------
  contact=this.formbuilder.group({
    sideTitle:["",Validators.required],
      text:["",Validators.required]
  })
  contact_Save_btn: boolean=false;
  Contact_update_btn: boolean=false;
  // ------------------------------------------------------------------------

  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
    private title:Title , private route:ActivatedRoute , private generalServ:GeneralService) { }


  ngOnInit(): void {
    this.service.getContactData().subscribe(data =>{
      this.contactArray=data
    })
  }



  
  // ------------------------------- contact  -----------------------------
  SetAddContact(){
    this.contact_Save_btn=true;
    this.Contact_update_btn=false;
  }
  addContact(){
    this.service.addContact(this.contact.value)
    window.location.reload()
  }
  // ----------------------------------------------------------------------

  //--------------- update contact ---------------
  updateContactItem:any;
  setUpdateContact(item:any){
    this.contact_Save_btn=false;
    this.Contact_update_btn=true;
    this.updateContactItem=item;
    this.contact.patchValue({
      sideTitle:item.sideTitle,
      text:item.text
    })
  }
  updateContact(){
    this.service.updateContact(this.updateContactItem.id!,this.contact.value)
    window.location.reload()
  }
  //----------------------------------------------



  //-------------------------------- show data ---------------------------------------
showItem_Text:any;
showItem_TiTle:any;
showData_image(item:any){
    this.showItem_Text=item.text;
    this.showItem_TiTle=item.sideTitle;
}
//-----------------------------------------------------------------------

// --------------------------- for delete data --------------------------
swalDelete(identify:any , item:any){
  this.generalServ.swalDelete(identify,item.id)
}
//-----------------------------------------------------------------------

}
