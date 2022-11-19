import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { login } from '../interfaces/login.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-secert-login',
  templateUrl: './secert-login.component.html',
  styleUrls: ['./secert-login.component.scss']
})
export class SecertLoginComponent implements OnInit {


  loginArray:login[]=[]

  constructor( private title:Title, private formbuilder:FormBuilder, private service:GetDataService,
    private route:Router , private generalServ:GeneralService) { }

  ngOnInit(): void {
    this.title.setTitle(" login Data ")
    this.service.getLoginData().subscribe(data=>{
      this.loginArray=data
    })
  }

}
