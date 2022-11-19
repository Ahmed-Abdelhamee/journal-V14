import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { board, reviewersGroup } from '../interfaces/board.interface';
import { GeneralService } from '../services/general.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {

  constructor(  private formbuilder:FormBuilder, private service:GetDataService,
    private title:Title , private route:ActivatedRoute , private generalServ:GeneralService) { }

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

// control buttons view of save or update in modals
ViewBoardData:boolean=true
ViewBoardreviewerData:boolean=false
ViewBtnAddreviewer:boolean=true
  
  boardArray:board[]=[];

  boardReviewersArray:reviewersGroup[]=[]

  Find_reviewersGroup:reviewersGroup={};


  ngOnInit(): void {
    // get board data
    this.service.getBoard().subscribe(data=>{
      this.boardArray=data
    })
    this.service.getBoardReviewer().subscribe(data=>{
      this.boardReviewersArray=data
    })
  }
  
  viewBoard(){
    this.ViewBoardData=true
    this.ViewBoardreviewerData=false
  }
  viewBoardReviewer(){
    this.ViewBoardData=false
    this.ViewBoardreviewerData=true
  }

  //--------------------------------  add board  -------------------------
  addBoardData(){
    this.service.addBoard(this.board.value)
    window.location.reload()
  }
  // ------------------- add boardReviewers --------------------
  get boardReviewersGroupName(){
    return this.boardReviewers.get("groupNameArray") as FormArray
  }
  addBoardReviewer(){
    this.ViewBtnAddreviewer=false
    
    let reviewerData=this.formbuilder.group({
      name:["",Validators.required],
      job:["",Validators.required],
      generalSpecialty:["",Validators.required],
      Specialty:["",Validators.required],
      })
    let arr=this.boardReviewersGroupName as FormArray
    arr.push(reviewerData)
  }
  addboardReviewersData(){
    console.log(this.boardReviewers.value)
    this.service.addBoardReviewers(this.boardReviewers.value)
    window.location.reload()
  }
  //--------------------------------------------------------------------

  
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




  
//-------------------------------- show data ---------------------------------------
showItem_Text:any;
showItem_TiTle:any;
showData_image(item:any){
    this.showItem_Text=item.text;
    this.showItem_TiTle=item.title;
}
//-----------------------------------------------------------------------

// --------------------------- for delete data --------------------------
swalDelete(identify:any , item:any){
  this.generalServ.swalDelete(identify,item.id)
}
//-----------------------------------------------------------------------


}
