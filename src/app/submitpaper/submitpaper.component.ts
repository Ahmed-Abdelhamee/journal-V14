import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import * as AOS from 'aos';
// import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-submitpaper',
  templateUrl: './submitpaper.component.html',
  styleUrls: ['./submitpaper.component.scss']
})
export class SubmitpaperComponent implements OnInit {

  // checkSubmit:boolean=false
  count:number=1;

  morethan3:boolean=false;

  indexArrayReviwer:number=0;

  progressShowCounter:number=1;
  

  constructor(private formBuilder:FormBuilder ,private route:Router,private title:Title) { }

  // form builder variable
  AthorSubmitPaper=this.formBuilder.group({

    articleType:['',Validators.required],

    attachFiles:this.formBuilder.group({
      file1:['',Validators.required],
      file2:['',Validators.required],
      file3:['',Validators.required],
      file4:['',Validators.required],
    }),

    reviewerName:['',Validators.required],
    reviewerJop:['',Validators.required],
    contact:['',Validators.required],

    GeneralInformationText1:['',Validators.required],

    generalInformationText2:['',Validators.required],

    additionalReviewPreferences:this.formBuilder.array([]),

    comment:[""],

    receiptnumber:["",[Validators.required,Validators.pattern("[0-9]+")]],

    receiptPhoto:["",Validators.required],

    manuScriptData:this.formBuilder.group({
      title:['',Validators.required],
      Abstract:['',Validators.required],
      KeyWords:['',Validators.required],
      FundingInfo:['',Validators.required],
    })

  })

// global Object Variable to getData
  data:any={
    articleType:"",
    file1:"",
    file2:"",
    file3:"",
    file4:"",
    reviewerName:"",
    reviewerJop:"",
    contact:"",
    additionalReviewers:[{
      reviewerName:"",
      reviewerJop:"",
      contact:""
    }],
    comment:"",
    receiptnumber:"",
    receiptPhoto:"",
    title:"",
    Abstract:"",
    KeyWords:"",
    FundingInfo:"",
    GeneralInformationText1:"",
    GeneralInformationText2:""
  };


  ngOnInit(): void {
    this.title.setTitle("Submit  Paper")
      // ---------------------------------------------------------
      AOS.init()
  }

  // ***************** for progress show ***********
  setprogressShowCounter(number:number){
    this.progressShowCounter=number;
  }
  formWizardIncreaze(){
    this.progressShowCounter++;
    document.getElementById(`step${this.progressShowCounter}`)?.classList.add("active");
  }
  formWizardDecrease(){
    document.getElementById(`step${this.progressShowCounter}`)?.classList.remove("active");
    this.progressShowCounter--;
  }
  //************************************************* */

  // to get the additionalReviewPreferences array from the formGroup
  get additionalreview(){
    return this.AthorSubmitPaper.get('additionalReviewPreferences') as FormArray
  }
  //************************************************ */


  // function to add items reviewer(Name,Jop,Contact) in the array =>  additionalReviewPreferences
  addReviewer(){
    if(this.count<3){
    this.count++;
    
    let reviewForm=this.formBuilder.group({
      reviewerName:['',Validators.required],
      reviewerJop:['',Validators.required],
      contact:['',Validators.required]
    })
    this.additionalreview.push(reviewForm); 
    // this.additionalreview.push(this.formBuilder.control(reviewForm)); 

    // adding object reviewer(Name,Jop,Contact) to array (additionalReviewers) in data object
    this.data.additionalReviewers[this.indexArrayReviwer]={
      name:"",
      job:"",
      contact:""
    }

    // increase indexArrayReviwer 
    this.indexArrayReviwer++;
    
    }else{
      this.morethan3=true
    }
  }
  //**************************************************  */

  // function to remove the added groub of data
  cancel(index: number){
    // decrease variables (count , indexArrayReviwer)  
    this.count--;
    this.indexArrayReviwer--;
    // make the morethan3 variable is false
    this.morethan3=false;
    // remove the current objects in the array (additionalreview) in formGroup
    this.additionalreview.removeAt(index)
    //remove the current objects in array (additionalreview) = At position (index), remove 1 items
    this.data.additionalReviewers.splice(index,1);
  }
  //******************************************** */


  // function to set values in  the object-Variable (data) equal to the values entered in FormGroup
  showData(values:any){

    let getdata=values.value
      
      for(let i=0;i<this.data.additionalReviewers.length;i++){
        this.data.additionalReviewers[i]=getdata.additionalReviewPreferences[i];
      }

    this.data.articleType=getdata.articleType;
    this.data.file1=getdata.attachFiles.file1;
    this.data.file2=getdata.attachFiles.file2;
    this.data.file3=getdata.attachFiles.file3;
    this.data.file4=getdata.attachFiles.file4;
    this.data.reviewerName=getdata.reviewerName;
    this.data.reviewerJop=getdata.reviewerJop;
    this.data.contact=getdata.contact;
    
    this.data.comment=getdata.comment;
    this.data.receiptnumber=getdata.receiptnumber;
    this.data.receiptPhoto=getdata.receiptPhoto;
    this.data.title=getdata.manuScriptData.title;
    this.data.Abstract=getdata.manuScriptData.Abstract;
    this.data.KeyWords=getdata.manuScriptData.KeyWords;
    this.data.FundingInfo=getdata.manuScriptData.FundingInfo;
    this.data.GeneralInformationText1=getdata.GeneralInformationText1;
    this.data.GeneralInformationText2=getdata.generalInformationText2;

    console.log(this.AthorSubmitPaper.value)
  }
  //*********************************************************************************************** */

  // the Submit function 
  savePaper(values:any){
    if(values.valid){
      console.log(this.AthorSubmitPaper.value)
      // this.checkSubmit=true;
      this.successAlert()
    }
    else {
      this.erroralert();
      // this.checkSubmit=false;
      console.log(this.AthorSubmitPaper.errors)
    }
  }
  //******************* */

  // function for alert Success
 successAlert(){
    // Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: 'your data sended successfully',
    //   customClass: {
    //     confirmButton: 'btn btn-success',
    //   },
    // }).then((result:any)=>{
    //   if(result.isConfirmed){
        this.route.navigate(["/"])
    //   }
    // })
  }
  //************************* */

  // function for alert Error
  erroralert(){
    // Swal.fire({
    //   position: 'center',
    //   icon: 'error',
    //   title: 'please check your data entered',
    //   showConfirmButton: false,
    //   showCancelButton:true,
    //   cancelButtonText:"OK",
    //   confirmButtonColor:"btn btn-danger",
    //   customClass:{
    //     cancelButton:"btn btn-danger"
    //   }
    // })
  }
  //************************ */

}
