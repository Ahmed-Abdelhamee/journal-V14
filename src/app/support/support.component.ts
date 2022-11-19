import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GetDataService } from '../services/get-data.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private service:GetDataService, private title:Title , private formbuilder:FormBuilder) { }

  support=this.formbuilder.group({
    userName:['',Validators.required],
    text:['',Validators.required],
    userId:['',Validators.required]
  })

  show:boolean=false;

  ngOnInit(): void {
    this.title.setTitle("support");

    Aos.init();
  }

  save(){
    this.service.addSupport(this.support.value)
    // window.location.reload()
  }
  showAlert(){
    this.show=true;
  }
}
