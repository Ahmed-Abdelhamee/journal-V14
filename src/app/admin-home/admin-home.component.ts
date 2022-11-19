import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { addResearchAdmin } from '../interfaces/admin.interface';
import { HomeCarsoulData, homePosts } from '../interfaces/HomeData.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
// arrays
  homeCarousel:HomeCarsoulData[]=[ ];
  homeData:homePosts[]=[];
  publishReviews:addResearchAdmin[]=[];
// boolean variables
  ViewCarsoulData:boolean=true
  ViewHomeData:boolean=false
  ViewPublished:boolean=false
// objects for view help
addCarsoul:any={ title:"", photourl:"" };
addHomePost:any={ text:"", photourl:"" };

// For Update data 
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
// for control the show 
  showItem_Photo:any;
  showItem_Text:any;
  showItem_TiTle:any;
  btnAddNewResearch:boolean=true;
// boolean properity to show the loading button while the photo uploaded
  waiting1:boolean=false;
  waiting2:boolean=false;


  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
    private title:Title , private route:ActivatedRoute , private router:Router , private generalServ:GeneralService) { }

    
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
  

  ngOnInit(): void {
    this.title.setTitle("admin home")
     // get home carsoul
     this.service.gethomeCarousel().subscribe( data=>{
      this.homeCarousel=data
    })
  }

  // ------------------------------ for control the show   ------------------------------
  ViewCarsoul(){
    this.ViewCarsoulData=true;
    this.ViewHomeData=false
    this.ViewPublished=false;
  }
  ViewData(){
    // get home data
    this.service.gethomeData().subscribe(data=>{
      this.homeData=data
    })
    this.ViewCarsoulData=false;
    this.ViewHomeData=true;
    this.ViewPublished=false;
  }
  Viewpublished(){
    this.ViewPublished=true;
    this.ViewCarsoulData=false;
    this.ViewHomeData=false 
    this.service.getResearches().subscribe(data=>{
      this.publishReviews=data
    })
  }

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
//---------------------------------------------------------------------------------------


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
  //----------------------------------------------------------------------------

  

// -------------- update home carsoul ----------------
setUpdateID_carsoul(id:number){
  this.carsoulID=id
  this.service.gethomeCarousel().subscribe(data=>{
    let object=data.find(item=> item.id==this.carsoulID)!
    this.updateHomeCarsoul.patchValue({
      title:object.title,
      // photourl:object.photourl
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
      // photourl:object.photourl
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


 // ------------------------------------------------------ adding research ------------------------------------------
  
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




swalDelete(identify:any , id:any){
  this.generalServ.swalDelete(identify,id)
}




}
