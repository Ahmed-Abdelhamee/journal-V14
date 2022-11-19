import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { support } from '../interfaces/footer.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-admin-support',
  templateUrl: './admin-support.component.html',
  styleUrls: ['./admin-support.component.scss']
})
export class AdminSupportComponent implements OnInit {

  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
    private title:Title , private route:ActivatedRoute , private generalServ:GeneralService) { }

  supportArray:support[]=[]

  ngOnInit(): void {
    this.service.getSupportData().subscribe(data =>{
      this.supportArray=data
    })
  }


    //-------------------------------- show data ---------------------------------------
showItem_Text:any;
showItem_userName:any;
showItem_userId:any;
showData_image(item:any){
    this.showItem_Text=item.text;
    this.showItem_userId=item.userId;
    this.showItem_userName=item.userName;
}
//-----------------------------------------------------------------------

// --------------------------- for delete data --------------------------
swalDelete(identify:any , item:any){
  this.generalServ.swalDelete(identify,item.id)
}
//-----------------------------------------------------------------------

}
