import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GetDataService } from '../services/get-data.service';
// import  *  as $ from 'jquery';
import { backImg, HomeCarsoulData, homePosts } from '../interfaces/HomeData.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { instrctions, instrctionsFile } from '../interfaces/instructions.interface';
import { aimdata } from '../interfaces/aimdata.interface';
import { board, reviewers } from '../interfaces/board.interface';
import { addResearchAdmin} from '../interfaces/admin.interface';
import { headerData } from '../interfaces/headerData.interface';
import { profileSettings } from '../interfaces/profileData.interface';
import { about, contact, support } from '../interfaces/footer.interface';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {

  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
                private title:Title , private route:ActivatedRoute , private router:Router) { }

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
    profileCheck:boolean=false;
    aboutCheck:boolean=false;
    logo:boolean=false;
    btnAddNewResearch:boolean=true;
    support_Check:boolean=false;
    contact_Check:boolean=false;

    contact_Save_btn:boolean=false;
    Contact_update_btn:boolean=false;

  // ------------------------------------------------------- form builder variable  -------------------------------------------------
  
  //------------------ header data ---------------
  headerData=this.formbuilder.group({
    journalname:["",Validators.required],
    logoImg:["",Validators.required]
  })
  // ---------------------------------------------

  //-----------------------------  home variables  ----------------------
  carsoulID:any;
  updateCarsoulObject:any={ title:"", photourl:"" };
  updateHomeCarsoul=this.formbuilder.group({
    title:[""],
    photourl:[""],
  })

  homeID:any
  updateHomeObject:any={ text:"", photourl:"" };
  updateHomeData=this.formbuilder.group({
    text:[""],
    photourl:[""],
  })

  backImage=this.formbuilder.group({
    backImage:[,Validators.required],
    id:[1,Validators.required],
  })
  
  //---------------------------------------------------------------------

  // -------------------------   the research variables    -----------------------

  publishedVolumes=this.formbuilder.group({
    id:["",Validators.required],
    researchGroupNames:this.formbuilder.array([])
  })
  researchersArray:any // for get reaserchers the array in researchesGroups

  researchGroubData=this.formbuilder.group({
    id:["",Validators.required],
      researches:this.formbuilder.array([])
  }) 
  research=this.formbuilder.group({
    title:["",Validators.required],
    pages:["",Validators.required],
    summary:["",Validators.required],
    basicWords:["",Validators.required],
    researchers:this.formbuilder.array([]),
    researchfile:["",Validators.required],
  })

  // --------------------------------------------------------------------
  
  
  // -------------------------   instructions variables  --------------------------

  instruction=this.formbuilder.group({
    title:["",Validators.required],
    text:["",Validators.required],
  })
  instructionFile=this.formbuilder.group({
    file:["",Validators.required],
  })

  // --------------------------------------------------------------------
  
  // -------------------------   aim variables  --------------------------
  aim =this.formbuilder.group({
    text:["",Validators.required],
  })
  // --------------------------------------------------------------------
  
  // -------------------------   board variables  --------------------------
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
  // --------------------------------------------------------------------

  // -------------------------  profile variable --------------------------
    profile=this.formbuilder.group({
      text1:["",Validators.required],
      text2:["",Validators.required],
      text3:["",Validators.required],
      text4:["",Validators.required],
      text5:["",Validators.required],
      text6:["",Validators.required],
    })
  // -------------------------------------------------------------------------------

  // ----------------------------------- about ------------------------------------
    about=this.formbuilder.group({
      BigTitle:["", Validators.required],
      sideTitle:["", Validators.required],
      text:["", Validators.required],
    })
  // -------------------------------------------------------------------------------

  // -------------------------------- contact --------------------------------
  contact=this.formbuilder.group({
    sideTitle:["",Validators.required],
      text:["",Validators.required]
  })
  // ------------------------------------------------------------------------



  // --------------------------------------------------------------------------------------------------------------------------


  // --------------------------------- arrays --------------------------------

  backImageURL:backImg={"backImage":""} ;

  homeCarousel:HomeCarsoulData[]=[ ];

  publishReviews:addResearchAdmin[]=[];

  homeData:homePosts[]=[];

  instructionsArray:instrctions[]=[]

  getinstructionsFile:instrctionsFile[]=[]
  
  instructionsFileURL:any="";

  aimArray:aimdata[]=[]

  boardArray:board[]=[];

  headerDataObject:headerData={}
  
  boardReviewersArray:reviewers[]=[]

  profileSettingsObject:profileSettings={
    text1:"",
    text2:"",
    text3:"",
    text4:"",
    text5:"",
    text6:"",
  }

  aboutArray:about[]=[]

  supportArray:support[]=[]
  
  contactArray:contact[]=[]

//----------------------------------------------------------------

  ngOnInit(): void {
    this.title.setTitle("journal admin");

    let routerValue=this.route.snapshot.paramMap.get("id");

    if(routerValue=="home"){
      this.showHome=true;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=false;
      this.profileCheck=false;
      this.aboutCheck=false;
      this.logo=false;
      this.support_Check=false;
      this.contact_Check=false;
      // get home carsoul
      this.service.gethomeCarousel().subscribe( data=>{
        this.homeCarousel=data
      })
    }else if(routerValue=="instructions"){
      this.showHome=false;
      this.showAddInstructions=true;
      this.showAddAim=false;
      this.showBoard=false;
      this.profileCheck=false;
      this.aboutCheck=false;
      this.logo=false;
      this.support_Check=false;
      this.contact_Check=false;
    // get instructions
    this.service.getInsturctions().subscribe(data=>{
      this.instructionsArray=data
    })
    this.service.getInsturctionsFile().subscribe(data=>{
      this.getinstructionsFile=data;
      this.instructionsFileURL=this.getinstructionsFile[0].file
    })
    // console.log(this.getinstructionsFile)
    }
    else if(routerValue=="aim"){
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=true;
      this.showBoard=false;
      this.profileCheck=false;
      this.aboutCheck=false;
      this.logo=false;
      this.support_Check=false;
      this.contact_Check=false;
      // get aim
      this.service.getAimData().subscribe(data=>{
        this.aimArray=data
      })
    }
    else if(routerValue=="board"){
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=true;
      this.profileCheck=false;
      this.aboutCheck=false;
      this.logo=false;
      this.support_Check=false;
      this.contact_Check=false;
      // get board data
      this.service.getBoard().subscribe(data=>{
        this.boardArray=data
      })
      this.service.getBoardReviewer().subscribe(data=>{
        this.boardReviewersArray=data
      })
    }
    else if(routerValue=="profile"){
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=false;
      this.profileCheck=true;
      this.logo=false;
      this.aboutCheck=false;
      this.support_Check=false;
      this.contact_Check=false;
      this.service.getProfileSettings().subscribe(data =>{
        this.profileSettingsObject=data
      })
    }else if(routerValue=="about"){
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=false;
      this.profileCheck=false;
      this.aboutCheck=true;
      this.logo=false;
      this.support_Check=false;
      this.contact_Check=false;
      this.service.getAbout().subscribe(data => {
        this.aboutArray=data
      })
    }else if(routerValue=="logo"){
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=false;
      this.profileCheck=false;
      this.aboutCheck=false;
      this.logo=true;
      this.support_Check=false;
      this.contact_Check=false;
      this.service.getHeaderData().subscribe(data =>{
        this.headerDataObject=data
      })
      this.service.getHomeBackImage().subscribe(data =>{
        this.backImageURL=data
      })
    }else if(routerValue=="contact"){
      this.service.getContactData().subscribe(data =>{
        this.contactArray=data
      })
        this.showHome=false;
        this.showAddInstructions=false;
        this.showAddAim=false;
        this.showBoard=false;
        this.profileCheck=false;
        this.aboutCheck=false;
        this.logo=false;
        this.support_Check=false;
        this.contact_Check=true;
        console.log(this.contactArray)
    }else if(routerValue=="support"){
      this.service.getSupportData().subscribe(data =>{
        this.supportArray=data
      })
      this.showHome=false;
      this.showAddInstructions=false;
      this.showAddAim=false;
      this.showBoard=false;
      this.profileCheck=false;
      this.aboutCheck=false;
      this.logo=false;
      this.support_Check=true;
      this.contact_Check=false;
    }
    
  }

  // ------------------------------------------------- view home data ------------------------------------------
  
ViewCarsoulData:boolean=true
ViewHomeData:boolean=false

  ViewCarsoul(){
    this.ViewCarsoulData=true;
    this.ViewHomeData=false
  }
  ViewData(){
    // get home data
    this.service.gethomeData().subscribe(data=>{
      this.homeData=data
    })
    this.service.getResearches().subscribe(data=>{
      this.publishReviews=data
    })
    this.ViewCarsoulData=false;
    this.ViewHomeData=true;
  }
  //------------------------------------------------------------------------

 

  // -------------------------------------------------- posting data -----------------------------------------------------

  // --------------------------- add carsoul image -----------------------------
  // for upload image 
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
    window.location.reload()
  }
  // ---------------------------  adding home post  ---------------------------
  // for upload image 
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
    window.location.reload()
  }
  //------------------------------------------------------------------------------------------------------------

  
  // ---------------------------------------------- adding research ---------------------------------------------
  
  get getresearchesGroups(){  // get the big array of group names
    return this.publishedVolumes.get("researchGroupNames") as FormArray
  }
  get getResearches(){
    return this.researchGroubData.get("researches") as FormArray
  }
  get getResearch(){
    return this.researchGroubData.get("research") as FormGroup
  }
  addResearch(){
    let theGroupResearches=this.researchGroubData.get("researches") as FormArray
    theGroupResearches.push(this.research) // push research in researches array
    this.getresearchesGroups.push(this.researchGroubData) // push the object group variable for a group of researches in the real researches groups
    this.researchersArray=this.research.get("researchers") as FormArray  // store the researchers array in global variable=researchersArray
    this.btnAddNewResearch=false ;
  }
  addReseachers(){
    let researcher=this.formbuilder.group({
      researcherName : ['',Validators.required ] 
    })
    this.researchersArray.push(researcher);
  }
  saveResearch(){
    console.log(this.publishedVolumes.value);
    this.service.addResearch(this.publishedVolumes.value);
  }
  // ----------------------------------------------------------------------------------------------------

  //---------------------------------------------- add instructions --------------------------------------
  addInstructions(){
    console.log(this.instruction.value)
    this.service.addInstructions(this.instruction.value)
    window.location.reload()
  }
  //--------------------------------------------------------------------------------------------

  //-------------------------------------------  add Aim  -----------------------------------------
  addAim(){
    this.service.addAim(this.aim.value)
    window.location.reload()
  }
  //--------------------------------------------------------------------------------------------

  //-------------------------------------------  add board  -----------------------------------------
  addBoardData(){
    this.service.addBoard(this.board.value)
    window.location.reload()
  }
  // add boardReviewers
  addboardReviewersData(){
    this.service.addBoardReviewers(this.boardReviewers.value)
    window.location.reload()
  }

  // ------------------------------------------ add about -------------------------------------
  addAbout(){
    this.service.addAbout(this.about.value)
    window.location.reload()
  }
  //--------------------------------------------------------------------------------------------

  // ---------------------------------- contact  -----------------------------------
  SetAddContact(){
    this.contact_Save_btn=true;
    this.Contact_update_btn=false;
  }
  addContact(){
    this.service.addContact(this.contact.value)
    window.location.reload()
  }
  // --------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------


  // ---------------------------------- update site data -----------------------------------------------
  
  // -------------------- site header ------------------
  setHeaderData(){
    this.headerData.patchValue({
      journalname:this.headerDataObject.journalname
    })
  }
   urlLogo:any="";
  uploadLogo(event:any){
    let loader=new FileReader();
    loader.readAsDataURL(event.target.files[0])
    loader.onload=(event)=>{
      this.urlLogo=event.target?.result
    }
  }
  updateHeader(){
    this.headerDataObject=this.headerData.value;
    this.service.updateHeaderData({journalname:this.headerDataObject.journalname,logoImg:this.urlLogo})
    window.location.reload()
  }
  // ----------------------------------------------------

  // -------------- update home carsoul ----------------
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
  // -------------- update home data ------------------
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
  // ---------------------------------------------

  // ------------------ image back ---------------
  url:any="0"
  uploadbackImage(event:any){
    let loader=new FileReader();
    loader.readAsDataURL(event.target.files[0])
    loader.onload=(event)=>{
      this.url=event.target?.result;
    }
  }
  updatebackImage(){
      this.backImage.patchValue({
        backImage:this.url,
      })
      this.service.updateBackImage(this.backImage.value)
      // this.router.navigate(["/"])
      window.location.reload()
  }
  // ---------------------------------------------


  
  // --------- update instructions -----------
  idInstruction:number=0
  setInstructionID(item:any){
    this.idInstruction=item.id;
    this.instruction.patchValue({
      title:item.title,
      text:item.text,
    })
  }
  updateInstruction(){
    this.service.updateInstruction(this.idInstruction,this.instruction.value)
    window.location.reload()
  }
  updateInstructionFile(){
    this.service.updateInstructionFile(this.instructionFile.value)
    window.location.reload()
  }
  //-------------------------------------------


  // --------------- update Aim ----------------
  idAim:number=0
  setAim(item:any){
    this.idAim=item.id;
    this.aim.patchValue({
      text:item.text,
    })
  }
  updateAim(){
    this.service.updateAim(this.idAim,this.aim.value)
    window.location.reload()
  }

  //-------------------------------------------

  // --------------- update Board ----------------
  idBoard:number=0
  setBoard(item:any){
    this.idBoard=item.id;
    this.board.patchValue({
      title:item.title,
      text:item.text,
    })
  }
  updateBoard(){
    this.service.updateBoard(this.idBoard,this.board.value)
    window.location.reload()
  }
  idBoardReviewer:number=0
  setBoardReviewer(item:any){
    this.idBoardReviewer=item.id;
    this.boardReviewers.patchValue({
      name:item.name,
      job:item.job,
      generalSpecialty:item.generalSpecialty,
      Specialty:item.Specialty,
    })
  }
  updateBoardReviewer(){
    this.service.updateBoardReviewer(this.idBoardReviewer,this.boardReviewers.value)
    window.location.reload()
  }
  //-------------------------------------------

  // -------------- update profile ------------
  setProfileValue(){
    this.profile.patchValue({
      text1:this.profileSettingsObject.text1,
      text2:this.profileSettingsObject.text2,
      text3:this.profileSettingsObject.text3,
      text4:this.profileSettingsObject.text4,
      text5:this.profileSettingsObject.text5,
      text6:this.profileSettingsObject.text6,
    })
  }
  updateProfile(){
    this.service.updateProfile(this.profile.value)
    window.location.reload()
  }
  // -----------------------------------------

  //--------------- update about ------------
  aboutItem:any={}
  setAbout(item:any){
    this.aboutItem=item;
    this.about.patchValue({
      BigTitle:item.BigTitle,
      sideTitle:item.sideTitle,
      text:item.text,
    })
  }
  aboutUpdate(){
    this.service.updateAbout(this.aboutItem.id!,this.about.value);
    window.location.reload();
  }
  //-----------------------------------------

  //----------------------- update contact --------------------
  updateContactItem:any;
  setUpdateContact(item:any){
    this.contact_Save_btn=false;
    this.Contact_update_btn=true;
    this.updateContactItem=item;
    this.contact.patchValue({
      sideTitle:item.sideTitle,
      text:item.text
    })
  }
  updateContact(){
    this.service.updateContact(this.updateContactItem.id!,this.contact.value)
    window.location.reload()
  }
  //------------------------------------------------------------

 // ----------------------------------------------- deleting data -------------------------------------------
 deleteCarsouel(id: number){
  this.service.deleteHomeCarousel(id)
  window.location.reload()
}

deleteHomeData(id: number){
  this.service.deleteHomedata(id);
  window.location.reload()
}

deleteIstructions(item: any){
  this.service.deleteInstruction(item.id)
  window.location.reload()
}

deleteAim(item: any){
  this.service.deleteAim(item.id)
  window.location.reload()
}

deleteBoard(item: any){
  this.service.deleteBoard(item.id)
  window.location.reload()
}

deleteReviewer(item: any){
  this.service.deleteBoardReviewer(item.id)
  window.location.reload()
}

deleteAbout(item:any){ 
  this.service.deleteAbout(item.id)
  window.location.reload()
 
}

deleteSupport(item:any){
  this.service.deleteSupport(item.id)
  window.location.reload()
}
deleteContact(item:any){
  this.service.deleteContact(item.id)
  window.location.reload()
}
//-----------------------------------------------------------------------------------------------------------


}
