import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { notes } from '../interfaces/notes.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-submissioncheck',
  templateUrl: './submissioncheck.component.html',
  styleUrls: ['./submissioncheck.component.scss']
})
export class SubmissioncheckComponent implements OnInit {

  constructor(private title:Title,private dataService:GetDataService) { }

  notes:notes[]=[];

  ngOnInit(): void {
    this.title.setTitle("submision notes");

    this.dataService.getsubmissioncheck().subscribe(data =>
      this.notes=data
    )

  }

}
