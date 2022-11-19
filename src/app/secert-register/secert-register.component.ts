import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { register } from '../interfaces/register.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-secert-register',
  templateUrl: './secert-register.component.html',
  styleUrls: ['./secert-register.component.scss']
})
export class SecertRegisterComponent implements OnInit {

  registerArray:register[]=[]

  constructor( private title:Title, private formbuilder:FormBuilder, private service:GetDataService,
    private route:Router , private generalServ:GeneralService) { }


  ngOnInit(): void {
    this.title.setTitle(" login Data ")
    this.service.getRegisterData().subscribe(data=>{
      this.registerArray=data
    })
  }

}
