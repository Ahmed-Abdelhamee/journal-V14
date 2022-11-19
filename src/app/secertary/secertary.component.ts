import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-secertary',
  templateUrl: './secertary.component.html',
  styleUrls: ['./secertary.component.scss']
})
export class SecertaryComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
   this.title.setTitle("secertary")
  }

}
