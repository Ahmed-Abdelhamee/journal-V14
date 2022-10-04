import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-authorsapproval',
  templateUrl: './authorsapproval.component.html',
  styleUrls: ['./authorsapproval.component.scss']
})
export class AuthorsapprovalComponent implements OnInit {

  constructor(private title:Title,private formBuilder:FormBuilder,private service:GetDataService) { }

  
  approvalform=this.formBuilder.group({
    file:["",Validators.required],
    userId:["",Validators.required]
  })

  uploaded:boolean=false;

  ngOnInit(): void {
    this.title.setTitle("author's approval")

    this.approvalform.patchValue({
      userId:""
    })
  }

  submit(values:any){
      console.log(this.approvalform.value);
      this.uploaded=true;
      this.service.addAuthoAapprovalFile(this.approvalform.value);
  }
  
}
