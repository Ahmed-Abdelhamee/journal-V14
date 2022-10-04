import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { contact } from '../interfaces/footer.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private service:GetDataService, private title:Title) { }

  contactArray:contact[]=[]

  ngOnInit(): void {
    this.title.setTitle("contact us")

    this.service.getContactData().subscribe( data =>{
      this.contactArray=data
    })
  }

}
