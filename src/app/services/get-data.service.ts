import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { addCarsoul, addHomePost, addResearchAdmin, authoAapprovalFile } from '../interfaces/admin.interface';
import { aimdata } from '../interfaces/aimdata.interface';
import { reviewers } from '../interfaces/board.interface';
import { complete } from '../interfaces/complete.interface';
import { headerData } from '../interfaces/headerData.interface';
import { backImg, HomeCarsoulData, homePosts } from '../interfaces/HomeData.interface';
import { instrctions, instrctionsFile } from '../interfaces/instructions.interface';
import { profileSettings, userprofileData } from '../interfaces/profileData.interface';
import { data } from '../interfaces/revision.interface';
import { notes } from '../interfaces/notes.interface';
import { result } from '../interfaces/submissionResult.interface';
import { publishedVolume } from '../interfaces/viewResearches.interface';
import { about, contact, support } from '../interfaces/footer.interface';
import { serverURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  
  //------------------------------------------- get data from json server ----------------------------------
  getHeaderData():Observable<headerData>{
    return this.http.get<headerData>(serverURL.serverURL+"header-data")
  }
  gethomeCarousel():Observable<HomeCarsoulData[]>{
    return this.http.get<HomeCarsoulData[]>(serverURL.serverURL+"home-carousel")
  }
  gethomeData():Observable<homePosts[]>{
    return this.http.get<homePosts[]>(serverURL.serverURL+"home-data")
  }
   getHomeBackImage():Observable<backImg>{
    return this.http.get<backImg>(serverURL.serverURL+"bg-image")
   }
   getProfileSettings():Observable<profileSettings>{
    return this.http.get<profileSettings>(serverURL.serverURL+"profile-settings") //*********************************** */
   }
   getBoard():Observable<instrctions[]>{
    return this.http.get<instrctions[]>(serverURL.serverURL+"board-data")
   }
   getBoardReviewer():Observable<reviewers[]>{
    return this.http.get<reviewers[]>(serverURL.serverURL+"board-reviewers")
   }
   getAimData():Observable<aimdata[]>{
    return this.http.get<aimdata[]>(serverURL.serverURL+"aim-data")
   }
   getInsturctions():Observable<instrctions[]>{
    return this.http.get<instrctions[]>(serverURL.serverURL+"instruction-data")
   }
   getInsturctionsFile():Observable<instrctionsFile[]>{
    return this.http.get<instrctionsFile[]>(serverURL.serverURL+"instruction-file")
   }
   getsubmissioncheck():Observable<notes[]>{
     return this.http.get<notes[]>(serverURL.serverURL+"researches-notes");
   }
   getRevisionData():Observable<data[]>{
     return this.http.get<data[]>(serverURL.serverURL+"revisions")
   }
   getresultData():Observable<result[]>{
    return this.http.get<result[]>(serverURL.serverURL+"revision-results")
   }
   getcompleted():Observable<complete[]>{
     return this.http.get<complete[]>(serverURL.serverURL+"complete-reseaches")
   }

   // get researches data
   getPublishedVolume():Observable<publishedVolume[]>{
    return this.http.get<publishedVolume[]>(serverURL.serverURL+"researches")
   }
   getResearches():Observable<addResearchAdmin[]>{//  this function for adding the published volume
    return this.http.get<addResearchAdmin[]>(serverURL.serverURL+"researches") //*********************************** */
  }

  getAuthoAapprovalFile():Observable<authoAapprovalFile[]>{
    return this.http.get<authoAapprovalFile[]>(serverURL.serverURL+"authorsapproval")
  }

  getAbout():Observable<about[]>{
    return this.http.get<about[]>(serverURL.serverURL+"about")
  }

  getSupportData():Observable<support[]>{
    return this.http.get<support[]>(serverURL.serverURL+"support")
  }

  getContactData():Observable<contact[]>{
    return this.http.get<contact[]>(serverURL.serverURL+"contact")
  }


//------------------------------------------ add data-------------------------------------------------

  addHomeCarousel(data:HomeCarsoulData){
    this.http.post(serverURL.serverURL+"home-carousel",data).subscribe()
  }
  addHomData(data:homePosts){
    this.http.post(serverURL.serverURL+"home-data",data).subscribe()
  }

  addResearch(data:any){
    let researches:any[]=[];   // to get researches for test them
    let publishedVolumeID:any="";   // for test if the published volume is exist
    let researchGroupName:any="";   // for test if the researchGroupName is exist

    this.getResearches().subscribe(dataa=>{
      researches=dataa
      publishedVolumeID=researches.find(item=> item.id==data.id)

      if(publishedVolumeID=="" || publishedVolumeID==undefined)
      {
        console.log("publishedVolumeID not Exist")
        this.http.post(serverURL.serverURL+"researches",data).subscribe()
      }
      // else
      // {
      //   let arr:any[]=publishedVolumeID.researchGroupNames
      //   researchGroupName=arr.find(item=> item.id==data.researchGroupNames[0].id)

      //   if(researchGroupName=="" || researchGroupName==undefined){
      //     this.http.post(serverURL.serverURL+`researches?id=${publishedVolumeID.id}/researchGroupNames`,data.researchGroupNames[0]).subscribe() // add new researchGroupName
      //     // console.log("researchGroupName not Exist")
      //   }
      //   else{
      //     // this.http.post(serverURL.serverURL+"researches",data).subscribe() // add research in group of researches
      //     console.log("researchGroupName is Exist")
      //   }
        
      // }
    })
  }

  addInstructions(data:instrctions){
    this.http.post(serverURL.serverURL+"instruction-data",data).subscribe()
  }

  addAim(data:aimdata){
    this.http.post(serverURL.serverURL+"aim-data",data).subscribe()
  }

  addBoard(data:aimdata){
    this.http.post(serverURL.serverURL+"board-data",data).subscribe()
  }

  addBoardReviewers(data:aimdata){
    this.http.post(serverURL.serverURL+"board-reviewers",data).subscribe()
  }

  add_UserResearch_forRevision(data:data){
    this.http.post(serverURL.serverURL+"revisions",data).subscribe()
  }

  addAuthoAapprovalFile(data:authoAapprovalFile){
    this.http.post(serverURL.serverURL+"authorsapproval",data).subscribe()
  }

  addNotes(data:notes){
    this.http.post(serverURL.serverURL+"researches-notes",data).subscribe()
  }

  addResearchResult(data:result){
    this.http.post(serverURL.serverURL+"revision-results",data).subscribe()
  }

  addCompeletedResearches(data:complete){
    this.http.post(serverURL.serverURL+"complete-reseaches",data).subscribe()
  }

  addAbout(data:about){
    this.http.post(serverURL.serverURL+"about",data).subscribe()
  }

  addSupport(data:support){
    this.http.post(serverURL.serverURL+"support",data).subscribe()
  }

  addContact(data:contact){
    this.http.post(serverURL.serverURL+"contact",data).subscribe()
  }
  //----------------------------------------------------------------------------------------------------

  //------------------------------------------ delete data---------------------------------------------
  deleteHomeCarousel(id:number){
    this.http.delete(serverURL.serverURL+`home-carousel/${id}`).subscribe()
  }
  deleteHomedata(id:number){
    this.http.delete(serverURL.serverURL+`home-data/${id}`).subscribe()
  }
  deleteInstruction(id:number){
    this.http.delete(serverURL.serverURL+`instruction-data/${id}`).subscribe()
  }
  deleteAim(id:number){
    this.http.delete(serverURL.serverURL+`aim-data/${id}`).subscribe()
  }
  deleteBoard(id:number){
    this.http.delete(serverURL.serverURL+`board-data/${id}`).subscribe()
  }
  deleteBoardReviewer(id:number){
    this.http.delete(serverURL.serverURL+`board-reviewers/${id}`).subscribe()
  }
  delete_from_NewResearch(id:number){
    this.http.delete(serverURL.serverURL+`revisions/${id}`).subscribe()
  }
  deleteReceipt(id:any){
    this.http.delete(serverURL.serverURL+`authorsapproval/${id}`).subscribe()
  }
  deleteNotes(id:any){
    this.http.delete(serverURL.serverURL+`researches-notes/${id}`).subscribe()
  }
  deleteResearchResult(id:any){
    this.http.delete(serverURL.serverURL+`revision-results/${id}`).subscribe()
  }
  deleteCompeletedResearch(id:any){
    this.http.delete(serverURL.serverURL+`complete-reseaches/${id}`).subscribe()
  }
  deleteAbout(id:number){
    this.http.delete(serverURL.serverURL+`about/${id}`).subscribe()
  }
  deleteSupport(id:number){
    this.http.delete(serverURL.serverURL+`support/${id}`).subscribe()
  }
  deleteContact(id:number){
    this.http.delete(serverURL.serverURL+`contact/${id}`).subscribe()
  }
  //----------------------------------------------------------------------------------------------------

  //------------------------------------------ delete data---------------------------------------------
  updateHeaderData(data:any){
    return this.http.put(serverURL.serverURL+"header-data",data).subscribe()
  }
  updateHomeCarousel(id:number,data:any){
    this.http.put(serverURL.serverURL+`home-carousel/${id}`,data).subscribe()
  }
  updateHomeData(id:number,data:any){
    this.http.put(serverURL.serverURL+`home-data/${id}`,data).subscribe()
  }
  updateBackImage( data:backImg){
    this.http.put(serverURL.serverURL+`bg-image`,data).subscribe()
  }
  updateInstruction(id:number,data:string){
    this.http.put(serverURL.serverURL+`instruction-data/${id}`,data).subscribe()
  }
  updateInstructionFile(data:string){
    this.http.put(serverURL.serverURL+`instruction-file/${1}`,data).subscribe()
  }
  updateAim(id:number, data:any){
    this.http.put(serverURL.serverURL+`aim-data/${id}`,data).subscribe()
  }
  updateBoard(id:number, data:any){
    this.http.put(serverURL.serverURL+`board-data/${id}`,data).subscribe()
  }
  updateBoardReviewer(id:number, data:any){
    this.http.put(serverURL.serverURL+`board-reviewers/${id}`,data).subscribe()
  }
  updateProfile(data:any){
    this.http.put(serverURL.serverURL+`profile-settings`,data).subscribe()
  }
  updateNotes(id:number,data:any){
    this.http.put(serverURL.serverURL+`researches-notes/${id}`,data).subscribe()
  }
  updateResearchResult(id:any,data:any){
    this.http.put(serverURL.serverURL+`revision-results/${id}`,data).subscribe()
  }
  updateAbout(id:number,data:about){
    this.http.put(serverURL.serverURL+`about/${id}`,data).subscribe()
  }
  // updateSupport(id:number,data:support){
  //   this.http.put(serverURL.serverURL+`support/${id}`,data).subscribe()
  // }
  updateContact(id:number,data:contact){
    this.http.put(serverURL.serverURL+`contact/${id}`,data).subscribe()
  }
}
