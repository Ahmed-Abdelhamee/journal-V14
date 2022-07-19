import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-authorsapproval',
  templateUrl: './authorsapproval.component.html',
  styleUrls: ['./authorsapproval.component.scss']
})
export class AuthorsapprovalComponent implements OnInit {

  constructor(private title:Title,private formBuilder:FormBuilder) { }

  approvalform=this.formBuilder.group({
    formApprovalFile:["",Validators.required]
  })

  uploaded:boolean=false;

  ngOnInit(): void {
    this.title.setTitle("author's approval")
  }

  submit(values:any){
    if(values.valid){
      console.log(this.approvalform.value);
      this.uploaded=true;
    }
  }
  
}
