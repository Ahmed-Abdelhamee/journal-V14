import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GetDataService } from '../services/get-data.service';
// import  *  as $ from 'jquery';
import { backImg, HomeCarsoulData, homePosts } from '../interfaces/HomeData.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { instrctions, instrctionsFile } from '../interfaces/instructions.interface';
import { aimdata } from '../interfaces/aimdata.interface';
import { board, reviewers, reviewersGroup } from '../interfaces/board.interface';
import { addResearchAdmin} from '../interfaces/admin.interface';
import { headerData } from '../interfaces/headerData.interface';
import { profileSettings } from '../interfaces/profileData.interface';
import { about, contact, support } from '../interfaces/footer.interface';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {

  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
                private title:Title , private route:ActivatedRoute , private router:Router) { }

hideAddResearch:boolean=false



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


// control buttons view of save or update in modals
    contact_Save_btn:boolean=false;
    Contact_update_btn:boolean=false;
    ViewCarsoulData:boolean=true
    ViewHomeData:boolean=false
    ViewPublished:boolean=false
    ViewBoardData:boolean=true
    ViewBoardreviewerData:boolean=false

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
    groupName:["",Validators.required],
    groupNameArray:this.formbuilder.array([]),
  })
  editReviewer=this.formbuilder.group({
      groupName:[{ value: '', disabled: true },Validators.required],
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

  headerDataObject:headerData={}

  homeCarousel:HomeCarsoulData[]=[ ];

  publishReviews:addResearchAdmin[]=[];

  homeData:homePosts[]=[];

  instructionsArray:instrctions[]=[]

  getinstructionsFile:instrctionsFile[]=[]
  
  instructionsFileURL:any="";

  aimArray:aimdata[]=[]

  boardArray:board[]=[];

  boardReviewersArray:reviewersGroup[]=[]

  Find_reviewersGroup:reviewersGroup={}

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
    // window.location.reload()

    let routerValue=this.route.snapshot.paramMap.get("id");

    this.service.getHeaderData().subscribe(data =>{
      this.headerDataObject=data
    })
    this.service.getHomeBackImage().subscribe(data =>{
      this.backImageURL=data
    })

    // if(routerValue=="home"){
    //   this.showHome=true;
    //   this.showAddInstructions=false;
    //   this.showAddAim=false;
    //   this.showBoard=false;
    //   this.profileCheck=false;
    //   this.aboutCheck=false;
    //   this.logo=false;
    //   this.support_Check=false;
    //   this.contact_Check=false;
    //   // get home carsoul
    //   this.service.gethomeCarousel().subscribe( data=>{
    //     this.homeCarousel=data
    //   })
    // }else if(routerValue=="instructions"){
    //   this.showHome=false;
    //   this.showAddInstructions=true;
    //   this.showAddAim=false;
    //   this.showBoard=false;
    //   this.profileCheck=false;
    //   this.aboutCheck=false;
    //   this.logo=false;
    //   this.support_Check=false;
    //   this.contact_Check=false;
    // // get instructions
    // this.service.getInsturctions().subscribe(data=>{
    //   this.instructionsArray=data
    // })
    // this.service.getInsturctionsFile().subscribe(data=>{
    //   this.getinstructionsFile=data;
    //   this.instructionsFileURL=this.getinstructionsFile[0].file
    // })
    // // console.log(this.getinstructionsFile)
    // }else if(routerValue=="aim"){
    //   this.showHome=false;
    //   this.showAddInstructions=false;
    //   this.showAddAim=true;
    //   this.showBoard=false;
    //   this.profileCheck=false;
    //   this.aboutCheck=false;
    //   this.logo=false;
    //   this.support_Check=false;
    //   this.contact_Check=false;
    //   // get aim
    //   this.service.getAimData().subscribe(data=>{
    //     this.aimArray=data
    //   })
    // }else if(routerValue=="board"){
    //   this.showHome=false;
    //   this.showAddInstructions=false;
    //   this.showAddAim=false;
    //   this.showBoard=true;
    //   this.profileCheck=false;
    //   this.aboutCheck=false;
    //   this.logo=false;
    //   this.support_Check=false;
    //   this.contact_Check=false;
    //   // get board data
    //   this.service.getBoard().subscribe(data=>{
    //     this.boardArray=data
    //   })
    //   this.service.getBoardReviewer().subscribe(data=>{
    //     this.boardReviewersArray=data
    //   })
    // }else if(routerValue=="profile"){
    //   this.showHome=false;
    //   this.showAddInstructions=false;
    //   this.showAddAim=false;
    //   this.showBoard=false;
    //   this.profileCheck=true;
    //   this.logo=false;
    //   this.aboutCheck=false;
    //   this.support_Check=false;
    //   this.contact_Check=false;
    //   this.service.getProfileSettings().subscribe(data =>{
    //     this.profileSettingsObject=data
    //   })
    // }else if(routerValue=="about"){
    //   this.showHome=false;
    //   this.showAddInstructions=false;
    //   this.showAddAim=false;
    //   this.showBoard=false;
    //   this.profileCheck=false;
    //   this.aboutCheck=true;
    //   this.logo=false;
    //   this.support_Check=false;
    //   this.contact_Check=false;
    //   this.service.getAbout().subscribe(data => {
    //     this.aboutArray=data
    //   })
    // }else if(routerValue=="logo"){
    //   this.showHome=false;
    //   this.showAddInstructions=false;
    //   this.showAddAim=false;
    //   this.showBoard=false;
    //   this.profileCheck=false;
    //   this.aboutCheck=false;
    //   this.logo=true;
    //   this.support_Check=false;
    //   this.contact_Check=false;
    //   this.service.getHeaderData().subscribe(data =>{
    //     this.headerDataObject=data
    //   })
    //   this.service.getHomeBackImage().subscribe(data =>{
    //     this.backImageURL=data
    //   })
    // }else if(routerValue=="contact"){
    //   this.service.getContactData().subscribe(data =>{
    //     this.contactArray=data
    //   })
    //     this.showHome=false;
    //     this.showAddInstructions=false;
    //     this.showAddAim=false;
    //     this.showBoard=false;
    //     this.profileCheck=false;
    //     this.aboutCheck=false;
    //     this.logo=false;
    //     this.support_Check=false;
    //     this.contact_Check=true;
    //     console.log(this.contactArray)
    // }else if(routerValue=="support"){
    //   this.service.getSupportData().subscribe(data =>{
    //     this.supportArray=data
    //   })
    //   this.showHome=false;
    //   this.showAddInstructions=false;
    //   this.showAddAim=false;
    //   this.showBoard=false;
    //   this.profileCheck=false;
    //   this.aboutCheck=false;
    //   this.logo=false;
    //   this.support_Check=true;
    //   this.contact_Check=false;
    // }
    
  }

  // ------------------------------------------------- control view data ------------------------------------------
  // ViewCarsoul(){
  //   this.ViewCarsoulData=true;
  //   this.ViewHomeData=false
  //   this.ViewPublished=false;
  // }
  // ViewData(){
  //   // get home data
  //   this.service.gethomeData().subscribe(data=>{
  //     this.homeData=data
  //   })
  //   this.ViewCarsoulData=false;
  //   this.ViewHomeData=true;
  //   this.ViewPublished=false;
  // }
  // Viewpublished(){
  //   this.ViewPublished=true;
  //   this.ViewCarsoulData=false;
  //   this.ViewHomeData=false 
  //   this.service.getResearches().subscribe(data=>{
  //     this.publishReviews=data
  //   })
  // }
  
  // viewBoard(){
  //   this.ViewBoardData=true
  //   this.ViewBoardreviewerData=false
  // }
  // viewBoardReviewer(){
  //   this.ViewBoardData=false
  //   this.ViewBoardreviewerData=true
  // }
  //----------------------------------------------------------------------------------------------------------------

 

  // -------------------------------------------------- posting data ------------------------------------------------



  
  
 





  //--------------------------- add instructions -----------------------
  // addInstructions(){
  //   console.log(this.instruction.value)
  //   this.service.addInstructions(this.instruction.value)
  //   window.location.reload()
  // }
  //---------------------------------------------------------------------

  //--------------------------------  add Aim  ---------------------------
  // addAim(){
  //   this.service.addAim(this.aim.value)
  //   window.location.reload()
  // }
  //--------------------------------------------------------------------






  //--------------------------------  add board  -------------------------
  // addBoardData(){
  //   this.service.addBoard(this.board.value)
  //   window.location.reload()
  // }
  // // add boardReviewers
  // get boardReviewersGroupName(){
  //   return this.boardReviewers.get("groupNameArray") as FormArray
  // }
  // addBoardReviewer(){
  //   let reviewerData=this.formbuilder.group({
  //     name:["",Validators.required],
  //     job:["",Validators.required],
  //     generalSpecialty:["",Validators.required],
  //     Specialty:["",Validators.required],
  //     })
  //   let arr=this.boardReviewersGroupName as FormArray
  //   arr.push(reviewerData)
  // }
  // addboardReviewersData(){
  //   console.log(this.boardReviewers.value)
  //   this.service.addBoardReviewers(this.boardReviewers.value)
  //   window.location.reload()
  // }
  // //--------------------------------------------------------------------







  // // ------------------------------- add about ----------------------------
  // addAbout(){
  //   this.service.addAbout(this.about.value)
  //   window.location.reload()
  // }
  // //-----------------------------------------------------------------------

  // // ------------------------------- contact  -----------------------------
  // SetAddContact(){
  //   this.contact_Save_btn=true;
  //   this.Contact_update_btn=false;
  // }
  // addContact(){
  //   this.service.addContact(this.contact.value)
  //   window.location.reload()
  // }
  // // ----------------------------------------------------------------------






  // --------------------------------------------------      update site data       --------------------------------------------
  
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


  // --------------------- image back -------------------
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
  // ----------------------------------------------------

  // ----------------------------------------------------

  // -------------- update home carsoul ----------------
  // setUpdateID_carsoul(id:number){
  //   this.carsoulID=id
  //   this.service.gethomeCarousel().subscribe(data=>{
  //     let object=data.find(item=> item.id==this.carsoulID)!
  //     this.updateHomeCarsoul.patchValue({
  //       title:object.title,
  //     })
  //   console.log(id,object)

  //   })
  // }
  // uploadCarsoulImg_ForUpdate(event:any){
  //   let loader=new FileReader();
  //   loader.readAsDataURL(event.target.files[0])
  //   loader.onload=(event)=>{
  //     this.updateCarsoulObject.photourl=event.target?.result;
  //   }
  // }
  // updateCarsoul(){
  //   this.updateCarsoulObject.title=this.updateHomeCarsoul.get("title")?.value
  //   this.service.updateHomeCarousel(this.carsoulID,this.updateCarsoulObject);
  //   window.location.reload()
  // }
  // // -------------- update home data ------------------
  // setUpdateID_Home(id:number){
  //   this.homeID=id
  //   this.service.gethomeData().subscribe(data=>{
  //     let object=data.find(item=> item.id==this.homeID)!
  //     this.updateHomeData.patchValue({
  //       text:object.text,
  //     })
  //   })
  // }
  // uploadHomeImg_ForUpdate(event:any){
  //   let loader=new FileReader();
  //   loader.readAsDataURL(event.target.files[0])
  //   loader.onload=(event)=>{
  //     this.updateHomeObject.photourl=event.target?.result;
  //   }
  // }
  // updateHome(){
  //   this.updateHomeObject.text=this.updateHomeData.get("text")?.value
  //   this.service.updateHomeData(this.homeID,this.updateHomeObject);
  //   window.location.reload()
  // }
  // ----------------------------------------------------

  

  
  // ---------------- update instructions ---------------
  // idInstruction:number=0
  // setInstructionID(item:any){
  //   this.idInstruction=item.id;
  //   this.instruction.patchValue({
  //     title:item.title,
  //     text:item.text,
  //   })
  // }
  // updateInstruction(){
  //   this.service.updateInstruction(this.idInstruction,this.instruction.value)
  //   window.location.reload()
  // }
  // updateInstructionFile(){
  //   this.service.updateInstructionFile(this.instructionFile.value)
  //   window.location.reload()
  // }
  //-----------------------------------------------------


  // -------------------- update Aim --------------------
  // idAim:number=0
  // setAim(item:any){
  //   this.idAim=item.id;
  //   this.aim.patchValue({
  //     text:item.text,
  //   })
  // }
  // updateAim(){
  //   this.service.updateAim(this.idAim,this.aim.value)
  //   window.location.reload()
  // }
  //-----------------------------------------------------







  // --------------- update Board ----------------
  idBoard:number=0
  // update board data 
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

  // update board Reviewers data 
  idBoardReviewerGroup:number=0;
  idBoardReviewer:number=0;

  get boardReviewersGroup(){
    return this.boardReviewers.get("groupName")?.value
  }
  setboardReviewersGroup(item:any){
    this.idBoardReviewerGroup=item.id;
    this.boardReviewers.patchValue({
      groupName:item.groupName,
    })
  }
  editReviewersGroup(){
    this.service.updateBoardReviewerGroup(this.idBoardReviewerGroup,this.boardReviewers.value)
    window.location.reload()
  }


  setBoardReviewer(DataItem:any,groupName:string){
    this.idBoardReviewer=DataItem.id;
    this.editReviewer.patchValue({
      groupName:groupName,
      name:DataItem.name,
      job:DataItem.job,
      generalSpecialty:DataItem.generalSpecialty,
      Specialty:DataItem.Specialty,
    })
    // this.Find_reviewersGroup=this.boardReviewersArray.find(item => item.groupName== DataItem.groubName)!;
  }
  updateBoardReviewer(){
    // this.service.updateBoardReviewer(this.idBoardReviewer,this.boardReviewers.value)
    window.location.reload()
  }
  
  
  //-------------------------------------------









  // -------------- update profile -------------
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
  // --------------------------------------------

  //--------------- update about ----------------
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
  //----------------------------------------------

  //--------------- update contact ---------------
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
  //----------------------------------------------





 // ----------------------------------------------- deleting data -------------------------------------------

swalDelete(identify:any , id:any){
  // ------------------------------------ code for design --------------------------------
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    // buttonsStyling: false,
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You want to remove this item!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel! ',
    reverseButtons: true,
    
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ).then(()=>{
        if(identify=="delete_carsoul"){
          this.deleteCarsouel(id)
        }else if(identify=="delete_HomeData"){
          this.deleteHomeData(id)
        }else if(identify=="delete_Istructions"){
          this.deleteIstructions(id)
        }else if(identify=="delete_Aim"){
          this.deleteAim(id)
        }else if(identify=="delete_Board"){
          this.deleteBoard(id)
        }else if(identify=="delete_Reviewer"){
          this.deleteReviewer(id)
        }else if(identify=="delete_ReviewersGroup"){
          this.deleteReviewersGroup(id)
        }else if(identify=="delete_About"){
          this.deleteAbout(id)
        }else if(identify=="delete_Support"){
          this.deleteSupport(id)
        }else if(identify=="delete_Contact"){
          this.deleteContact(id)
        }
      })
      
  }else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}

deleteCarsouel(id: number){
  this.service.deleteHomeCarousel(id)
  window.location.reload()
}

deleteHomeData(id: number){
this.service.deleteHomedata(id);
window.location.reload()
}

// we but type any to get the ID for the item
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
// this.service.deleteBoardReviewer(item.id)
window.location.reload()
}
deleteReviewersGroup(item:any){
this.service.deleteBoardReviewerGroup(item.id)
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

showItem_Photo:any;
showItem_Text:any;
showItem_TiTle:any;
showData_image(item:any){
  if(item.photourl==null ){
    this.showItem_Photo=null;
    this.showItem_Text=item.text;
    this.showItem_TiTle=item.title;
  }else{
    this.showItem_Photo=item.photourl;
    this.showItem_Text=item.text;
    this.showItem_TiTle="";
  }
}

}
