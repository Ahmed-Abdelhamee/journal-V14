import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

asd:boolean=true

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

// ------------------ form builders---------------
  addResearchData=this.formbuilder.group({
    folderName:["",Validators.required],
    researchTitle:["",Validators.required],
    pages:["",Validators.required],
    researcher:["",Validators.required],
    presentation:["",Validators.required],
  })

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
  // ----------------------------------------------------------

  // ----------------- home arrays -------------------
  homeCarousel:HomeCarsoulData[]=[
    {"photourl":"assets/img1.jpg","title":"Air Conditioning department"},
    {"photourl":"assets/img3.jpg","title":" Electric department"}
  ];

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

  homeData:homePosts[]=[
    {"text":"dasfdsdfgs hdfszxdnb cshdgfh zbxch bskdhfk hzjxbc ,sbdck hsdkhfcb skhdfbc, kszbc  Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique reiciendis quas pariatur cumque iure tempora delectus eaque architecto quia dolorem vitaxime perferendis ducimus accusamus, id, quisquam ipsum!","photourl":"assets/01.jpg"},
    {"text":"dasfdsdfgs hdfszxdnb cshdgfh zbxch bskdhfk hzjxbc ,sbdck hsdkhfcb skhdfbc, kszbc  Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique reiciendis quas pariatur cumque iure tempora delectus eaque architecto quia dolorem vitaxime perferendis ducimus accusamus, id, quisquam ipsum!","photourl":"assets/home.jpg"},
    {"text":"dasfdsdfgs hdfszxdnb cshdgfh zbxch bskdhfk hzjxbc ,sbdck hsdkhfcb skhdfbc, kszbc  Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique reiciendis quas pariatur cumque iure tempora delectus eaque architecto quia dolorem vitaxime perferendis ducimus accusamus, id, quisquam ipsum!","photourl":"assets/home.jpg"},
    {"text":"dasfdsdfgs hdfszxdnb cshdgfh zbxch bskdhfk hzjxbc ,sbdck hsdkhfcb skhdfbc, kszbc  Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique reiciendis quas pariatur cumque iure tempora delectus eaque architecto quia dolorem vitaxime perferendis ducimus accusamus, id, quisquam ipsum!","photourl":"assets/home.jpg"},
    {"text":"dasfdsdfgs hdfszxdnb cshdgfh zbxch bskdhfk hzjxbc ,sbdck hsdkhfcb skhdfbc, kszbc  Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique reiciendis quas pariatur cumque iure tempora delectus eaque architecto quia dolorem vitaxime perferendis ducimus accusamus, id, quisquam ipsum!","photourl":"assets/1.jpg"},
    {"text":"dasfdsdfgs hdfszxdnb cshdgfh zbxch bskdhfk hzjxbc ,sbdck hsdkhfcb skhdfbc, kszbc  Lorem, ipsum dolor sit amet consectetur adipisicing elit.Similique reiciendis quas pariatur cumque iure tempora delectus eaque architecto quia dolorem vitaxime perferendis ducimus accusamus, id, quisquam ipsum!"}
  ];
  //---------------------------------------------------

  // -------------- instructions array ----------------
  instructionsArray:instrctions[]=[
    {"title":"INSTRUCTIONS TO AUTHORS","text":"TRJ publishes original contributions, critical reviews, technical papers, technical data, short notes, and letters to the editor in English (preferred language) or Arabic. Authors are kindly requested to follow the recommendations given below and are urged to request the Submission Guide to TRJ by mail from the editor Faculty of Technology &Education, Sohag University. Sohag, Egypt, or E-mail:---------------------------------------------------"},
    {"title":"Submission of papers","text":"Original manuscript should submit via specified menu. Page numbers should be included at the page footers. The name, telephone, and the E-mail address of the corresponding author should be recorded. The author may indicate under which section of TRJ the paper is desired to appear. Authors are requested to submit a software version of their contribution in MS-Word ."},
    {"title":"Manuscript preparation","text":"Manuscripts should be typed single spaced two columns on A4-size paper using MS Word."},
    {"title":"Margins","text":"top margin should be 4.5 cm. Left & Right 2.5 cm. Left and right margins for the abstract and keywords are 3.5 cm. Space between columns 0.8 cm."},
    {"title":"Fonts","text":"Times New Roman for English text with the following sizes: Title 13 pt. upper case and in bold face. Author's name and affiliation: 12 pt. Text 10 pt. Arabic Transparent for Arabic Text with equivalent font sizes."},
    {"title":"Abstract","text":"Authors are requested to present, in addition to the abstract in the same language of the paper, a translation of the abstract in the other language (English/Arabic)."},
    {"title":"Symbols and abbreviations","text":"Symbols should correspond to international recommendations. Symbols and abbreviations that are not generally known must be explained when used for the first time. Abbreviations should be avoided in titles and abstracts."},
    {"title":"Keywords","text":"Authors are requested to submit up to five keywords of their choice. These will appear below the abstract in the printed article."},
    {"title":"References","text":"References are to be cited in the text by consecutive numbers in square brackets and listed by numbers in the reference list. Please refer to recent issues of the journal for specific examples."},
    {"title":"Tables","text":"Tables should be numbered and must be given headings. It is a good scientific style to arrange tables as transparently as possible. Tables are not to be combined with figures."},
    {"title":"Formulae","text":"Formulae and equations must be numbered consecutively in Arabic numerals (1, 2, 3...). They must be typed so clearly that each symbol can be recognized without error. There should be sufficient space between complex formulae and the preceding and subsequent text lines."},
    {"title":"Figures","text":"Letters, numbers, and essential details of the figure must be distinct and large enough to be recognized. Large figures may be developed with two column width and placed at either top or bottom of a page."},
    {"title":"Units","text":"SI or internationally agreed upon units should be used."}
]
//------------------------------------------------------

// -------------- Aim array ----------------
  aimArray:aimdata[]=[
    {"text":"International Journal of Technological Sciences (IJTS) is devoted to publishing high quality papers in the field of technology and applied sciences."},
    {"text":"(IJTS) publishes original papers, critical reviews, technical reports,technical data, short notes, technological topic pedagogy, and letters to the editor."},
    {"text":"Papers covering experimental, theoretical and computational aspects which contribute to the understanding and learning of technological and applied sciences are welcome."},
    {"text":"Authors from all over the world are invited to submit manuscripts for possible publication in (IJTS)."}

  ]
//------------------------------------------------------

// -------------- board and reviewers array ----------------
  boardArray:board[]=[
    {"text":"TRJ publishes original contributions, critical reviews, technical papers, technical data, short notes, and letters to the editor in English (preferred language) or Arabic. Authors are kindly requested to follow the recommendations given below and are urged to request the Submission Guide to TRJ by mail from the editor Faculty of Technology &Education, Sohag University. Sohag, Egypt, or E-mail:---------------------------------------------------"},
    {"title":"Submission of papers","text":"Original manuscript should submit via specified menu. Page numbers should be included at the page footers. The name, telephone, and the E-mail address of the corresponding author should be recorded. The author may indicate under which section of TRJ the paper is desired to appear. Authors are requested to submit a software version of their contribution in MS-Word ."},
    {"title":"Manuscript preparation","text":"Manuscripts should be typed single spaced two columns on A4-size paper using MS Word."},
    {"title":"Margins","text":"top margin should be 4.5 cm. Left & Right 2.5 cm. Left and right margins for the abstract and keywords are 3.5 cm. Space between columns 0.8 cm."},
    {"title":"Fonts","text":"Times New Roman for English text with the following sizes: Title 13 pt. upper case and in bold face. Author's name and affiliation: 12 pt. Text 10 pt. Arabic Transparent for Arabic Text with equivalent font sizes."},
    {"title":"Abstract","text":"Authors are requested to present, in addition to the abstract in the same language of the paper, a translation of the abstract in the other language (English/Arabic)."},
    {"title":"Symbols and abbreviations","text":"Symbols should correspond to international recommendations. Symbols and abbreviations that are not generally known must be explained when used for the first time. Abbreviations should be avoided in titles and abstracts."},
    {"title":"Keywords","text":"Authors are requested to submit up to five keywords of their choice. These will appear below the abstract in the printed article."},
    {"title":"References","text":"References are to be cited in the text by consecutive numbers in square brackets and listed by numbers in the reference list. Please refer to recent issues of the journal for specific examples."},
    {"title":"Tables","text":"Tables should be numbered and must be given headings. It is a good scientific style to arrange tables as transparently as possible. Tables are not to be combined with figures."},
    {"title":"Formulae","text":"Formulae and equations must be numbered consecutively in Arabic numerals (1, 2, 3...). They must be typed so clearly that each symbol can be recognized without error. There should be sufficient space between complex formulae and the preceding and subsequent text lines."},
    {"title":"Figures","text":"Letters, numbers, and essential details of the figure must be distinct and large enough to be recognized. Large figures may be developed with two column width and placed at either top or bottom of a page."},
    {"title":"Units","text":"SI or internationally agreed upon units should be used."}
  ];
  
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
    
  }


  // --------------------------- deleting data -------------------------
  deleteCarsouel(index: number){
    this.homeCarousel.splice(index,1);
  }
  deletePublishReviews(index: number){
    this.publishReviews.splice(index,1);
  }
  deleteHomeData(index: number){
    this.homeData.splice(index,1);
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

  // code to add carsoul image 
  uploadCarsoulImg(event:any){
  this.waiting1=true;
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
  this.homeCarousel.push(this.addCarsoul)
  }

  // code to upload image home post
  uploadHomeImgPost(event:any){
  this.waiting2=true;

  let loader=new FileReader();
  loader.readAsDataURL(event.target.files[0])
  loader.onload=(event)=>{
    this.addHomePost.photourl=event.target?.result;
  }
  this.waiting2=false;

  }
  // code to submit home post
  AddHomePostSubmit(input: { value: any; }){
  let data = input.value;
  this.addHomePost.text=data.text;
  this.homeData.push(this.addHomePost)
  // this.service.posthomePost(this.addHomePost) // usimg service function
  }

  // add research
  addResearch(){
    this.publishReviews.push({"publishedVolumes":`@${this.addResearchData.get("folderName")?.value}`})

  // --------------------- code for add published volumes to firebase server -----------------------

  // let folderName=this.addResearchData.get("folderName").value;
  // this.service.addResearch(folderName.toString(),this.addResearchData.value);
  // console.log(this.addResearchData.value)

  // /--------------------------------------------------------------------------------------------
  }

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



  // --------------------------- update data -------------------
    
  //------------------------------------------------------------

}
