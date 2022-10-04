import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { about } from '../interfaces/footer.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private service:GetDataService, private title:Title) { }

  aboutUsArray:about[]=[]

  ngOnInit(): void {
    this.title.setTitle("about us");

    this.service.getAbout().subscribe(data =>{
      this.aboutUsArray=data
    })
  }

}
