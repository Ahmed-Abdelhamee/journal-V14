import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from "aos";
import { instrctions } from '../interfaces/instructions.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  constructor(private getInstructions:GetDataService,private title:Title) { }

  instructions:instrctions[]=[]

  ngOnInit(): void {
    this.title.setTitle("INSTRUCTIONS")

    this.getInstructions.getInsturctions().subscribe(data=>
      this.instructions=data
    )

    AOS.init()
  }

}
