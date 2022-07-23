import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GetDataService } from '../services/get-data.service';
// import  *  as $ from 'jquery';
import { HomeCarsoulData, homePosts } from '../interfaces/HomeData.interface';
import { review } from '../interfaces/reviewsData.interface';
import { ActivatedRoute } from '@angular/router';
import { instrctions } from '../interfaces/instructions.interface';
import { aimdata } from '../interfaces/aimdata.interface';
import { board, reviewers } from '../interfaces/board.interface';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {

  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
                private title:Title , private route:ActivatedRoute) { }

hideAddResearch:boolean=false

addCarsoul:any={ title:"", photourl:"" };

addHomePost:any={ text:"", photourl:"" };

// boolean properity to show the loading button while the photo uploaded
  waiting1:boolean=false;
  waiting2:boolean=false;

// boolean properties to control the show 
    showHome:boolean=false;
    showAddInstructions:boolean=false;
    showAddAim:boolean=false;
    showBoard:boolean=false;
    boardReviewer:boolean=false;
    profile:boolean=false;
    about:boolean=false;


  // ------------------------------------ form builder variable-----------------------------

  researches=this.formbuilder.group({
    publishedVolumeName:["",Validators.required],
    researchesGroups:this.formbuilder.array([])
  })
  researchersArray:any // for get reaserchers the array in researchesGroups
  
  instruction=this.formbuilder.group({
    title:["",Validators.required],
    text:["",Validators.required],
  })
  aim =this.formbuilder.group({
    text:["",Validators.required],
  })
  board=this.formbuilder.group({
    title:["",Validators.required],
    text:["",Validators.required],
  })
  boardReviewers=this.formbuilder.group({
    name:["",Validators.required],
    job:["",Validators.required],
    generalSpecialty:["",Validators.required],
    Specialty:["",Validators.required],
  })

  // -------------------------------------------------------------------------------

  // ----------------- arrays -------------------
  homeCarousel:HomeCarsoulData[]=[ ];

  publishReviews:review[]=[
      {"publishedVolumes":"@electricity"},
      {"publishedVolumes":"@air conditioning"},
      {"publishedVolumes":"@power 2022"},
      {"publishedVolumes":"@electricity"},
      {"publishedVolumes":"@ air conditioning"},
      {"publishedVolumes":"@power 2022"},
      {"publishedVolumes":"@electricity"},
      {"publishedVolumes":"@ air conditioning"},
      {"publishedVolumes":"@power 2022"}
  ];

  homeData:homePosts[]=[];

  instructionsArray:instrctions[]=[]

  aimArray:aimdata[]=[]

  boardArray:board[]=[];
  
  boardReviewersArray:reviewers[]=[
      {"name" : "name reviewer 1 ","job":"job reviewer 1", "generalSpecialty":"General specialty of reviewer 1 ", "Specialty":"the specialty of reviewer 1 "},
      {"name" : "name reviewer 2 ","job":"job reviewer 2", "generalSpecialty":"General specialty of reviewer 2 ", "Specialty":"the specialty of reviewer 2 "},
      {"name" : "name reviewer 3 ","job":"job reviewer 3", "generalSpecialty":"General specialty of reviewer 3 ", "Specialty":"the specialty of reviewer 3 "},
      {"name" : "name reviewer 4 ","job":"job reviewer 4", "generalSpecialty":"General specialty of reviewer 4 ", "Specialty":"the specialty of reviewer 4 "},
      {"name" : "name reviewer 5 ","job":"job reviewer 5", "generalSpecialty":"General specialty of reviewer 5 ", "Specialty":"the specialty of reviewer 5 "},
      {"name" : "name reviewer 6 ","job":"job reviewer 6", "generalSpecialty":"General specialty of reviewer 6 ", "Specialty":"the specialty of reviewer 6 "},
      {"name" : "name reviewer 7 ","job":"job reviewer 7", "generalSpecialty":"General specialty of reviewer 7 ", "Specialty":"the specialty of reviewer 7 "},
      {"name" : "name reviewer 8 ","job":"job reviewer 8", "generalSpecialty":"General specialty of reviewer 8 ", "Specialty":"the specialty of reviewer 8 "}
  ]
//------------------------------------------------------

  ngOnInit(): void {
    this.title.setTitle("journal admin");

    let routerValue=this.route.snapshot.paramMap.get("id");

    if(routerValue=="home"){
      this.showHome=true;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=false;
      this.profile=false;
      this.about=false;

    }else if(routerValue=="instructions"){
      this.showHome=false;
      this.showAddInstructions=true;
      this.showAddAim=false;
      this.showBoard=false;
      this.profile=false;
      this.about=false;

    }else if(routerValue=="aim"){
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=true;
      this.showBoard=false;
      this.profile=false;
      this.about=false;

    }else if(routerValue=="board"){
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=true;
      this.profile=false;
      this.about=false;

    }else if(routerValue=="profile"){
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=false;
      this.profile=true;
      this.about=false;

    }else if(routerValue=="about"){
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=false;
      this.profile=false;
      this.about=true;

    }
    
    // get home data
    this.service.gethomeCarousel().subscribe( data=>{
      this.homeCarousel=data
    })
    this.service.gethomeData().subscribe(data=>{
      this.homeData=data
    })
    // get instructions
    this.service.getInsturctions().subscribe(data=>{
      this.instructionsArray=data
    })
    // get aim
    this.service.getAimData().subscribe(data=>{
      this.aimArray=data
    })
    // get board 
    this.service.getBoard().subscribe(data=>{
      this.boardArray=data
    })


  }

  // ------------------------------ for view data --------------------------
  
ViewCarsoulData:boolean=true

ViewHomeData:boolean=false

  ViewCarsoul(){
    this.ViewCarsoulData=true;
    this.ViewHomeData=false
  }
  ViewData(){
    this.ViewCarsoulData=false;
    this.ViewHomeData=true
  }
  //------------------------------------------------------------------------

  // --------------------------- deleting data -------------------------
  deleteCarsouel(id: number){
    this.service.deleteHomeCarousel(id)
    window.location.reload()
  }
  deletePublishReviews(index: number){
    this.publishReviews.splice(index,1);
  }
  deleteHomeData(id: number){
    this.service.deleteHomedata(id);
    window.location.reload()
  }

  deleteIstructions(index: number){
    this.instructionsArray.splice(index,1);
  }
  deleteAim(index: number){
    this.aimArray.splice(index,1);
  }
  deleteReviewer(index: number){
    this.boardReviewersArray.splice(index,1);
  }
  deleteBoard(index: number){
    this.boardArray.splice(index,1);
  }
//-------------------------------------------------------------------


  // --------------------------- posting data ----------------------------

  // ----------------------- add carsoul image -----------------------
  uploadCarsoulImg(event:any){
  this.waiting1=true;// waiting untill get the link
  let loader=new FileReader();
  loader.readAsDataURL(event.target.files[0])
  loader.onload=(event)=>{
    this.addCarsoul.photourl=event.target?.result;
  }
  this.waiting1=false; // waiting untill get the link
  // })
  }
  // code to submit carsoul data 
  carsoulSubmit(input: { value: any; }){
  let data = input.value;
  this.addCarsoul.title=data.title;
  this.service.addHomeCarousel(this.addCarsoul)
  }
  //--------------------------------------------------

  // ------------------- home post-------------------
  uploadHomeImgPost(event:any){
  this.waiting2=true; // for show msg
  let loader=new FileReader();
  loader.readAsDataURL(event.target.files[0])
  loader.onload=(event)=>{
    this.addHomePost.photourl=event.target?.result;
  }
  this.waiting2=false;  // for show msg
  }
  // code to submit home post
  AddHomePostSubmit(input: { value: any; }){
  let data = input.value;
  this.addHomePost.text=data.text;
  this.service.addHomData(this.addHomePost) // usimg service function
  }
  // ---- add research ----
  get getresearchesGroups(){
    return this.researches.get("researchesGroups") as FormArray
  }
  addResearch(){
    let research=this.formbuilder.group({
      researchGroupName:["",Validators.required],
      title:["",Validators.required],
      pages:["",Validators.required],
      summary:["",Validators.required],
      basicWords:["",Validators.required],
      researchers:this.formbuilder.array([]),
    })
    this.getresearchesGroups.push(research)

    this.researchersArray=research.get("researchers") as FormArray
  }
  addReseachers(){
    let researcher=this.formbuilder.group({
      researcherName : ['',Validators.required ] 
    })
    this.researchersArray.push(researcher);
  }
  saveResearch(){
    console.log(this.researches.value);
    this.service.addResearch(this.researches.value);
  }
  // -----------------------------------------------------------------------------------------------
  
  // add instructions
  addInstructions(){
    this.instructionsArray.push(this.instruction.value)
  }
  // add Aim
  addAim(){
    this.aimArray.push(this.aim.value)
  }
  // add board
  addBoardData(){
    this.boardArray.push(this.board.value)
  }
  // add boardReviewers
  addboardReviewersData(){
    this.boardReviewersArray.push(this.boardReviewers.value)
  }

  //------------------------------------------------------------


  // ----------------------------------------- update data -----------------------------------------

  // update home carsoul 
  carsoulID:any;
  updateCarsoulObject:any={ title:"", photourl:"" };
  updateHomeCarsoul=this.formbuilder.group({
    title:[""],
    photourl:[""],
  })
  setUpdateID_carsoul(id:number){
    this.carsoulID=id
    this.service.gethomeCarousel().subscribe(data=>{
      let object=data.find(item=> item.id==this.carsoulID)!
      this.updateHomeCarsoul.patchValue({
        title:object.title,
      })
    console.log(id,object)

    })
  }
  uploadCarsoulImg_ForUpdate(event:any){
    let loader=new FileReader();
    loader.readAsDataURL(event.target.files[0])
    loader.onload=(event)=>{
      this.updateCarsoulObject.photourl=event.target?.result;
    }
  }
  updateCarsoul(){
    this.updateCarsoulObject.title=this.updateHomeCarsoul.get("title")?.value
    this.service.updateHomeCarousel(this.carsoulID,this.updateCarsoulObject);
    window.location.reload()
  }
  //-----------------------------------------
  
  // update home data 
  homeID:any
  updateHomeObject:any={ text:"", photourl:"" };
  updateHomeData=this.formbuilder.group({
    text:[""],
    photourl:[""],
  })
  setUpdateID_Home(id:number){
    this.homeID=id
    this.service.gethomeData().subscribe(data=>{
      let object=data.find(item=> item.id==this.homeID)!
      this.updateHomeData.patchValue({
        text:object.text,
      })
    })
  }
  uploadHomeImg_ForUpdate(event:any){
    let loader=new FileReader();
    loader.readAsDataURL(event.target.files[0])
    loader.onload=(event)=>{
      this.updateHomeObject.photourl=event.target?.result;
    }
  }
  updateHome(){
    this.updateHomeObject.text=this.updateHomeData.get("text")?.value
    this.service.updateHomeData(this.homeID,this.updateHomeObject);
    window.location.reload()
  }
//-------------------------------------------

}
