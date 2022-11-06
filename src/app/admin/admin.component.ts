import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


  // // for text Editor code in angular
  // import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {

  constructor(private formbuilder:FormBuilder , private route:ActivatedRoute) { }

  viewAdmin:boolean=false;
  viewSecret:boolean=false;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    if(id=='0'){
      this.viewAdmin=true;
      this.viewSecret=false;
    }else {
      this.viewAdmin=false;
      this.viewSecret=true;
    }
  }

  // // for text Editor code in angular
  // htmlContent:any;
  // editorConfig: AngularEditorConfig = {
  //   editable: true,
  //     spellcheck: true,
  //     height: 'auto',
  //     minHeight: '0',
  //     maxHeight: 'auto',
  //     width: 'auto',
  //     minWidth: '0',
  //     translate: 'yes',
  //     enableToolbar: true,
  //     showToolbar: true,
  //     placeholder: 'Enter text here...',
  //     defaultParagraphSeparator: '',
  //     defaultFontName: '',
  //     defaultFontSize: '',
  //     fonts: [
  //       {class: 'arial', name: 'Arial'},
  //       {class: 'times-new-roman', name: 'Times New Roman'},
  //       {class: 'calibri', name: 'Calibri'},
  //       {class: 'comic-sans-ms', name: 'Comic Sans MS'}
  //     ],
  //     customClasses: [
  //     {
  //       name: 'quote',
  //       class: 'quote',
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: 'titleText',
  //       class: 'titleText',
  //       tag: 'h1',
  //     },
  //   ],
  //   uploadUrl: 'v1/image',
  //   // upload: (file: File) => {  } uploadWithCredentials: false,
  //   sanitize: true,
  //   toolbarPosition: 'top',
  //   toolbarHiddenButtons: [
  //     ['bold', 'italic'],
  //     ['fontSize']
  //   ]
// };

}
