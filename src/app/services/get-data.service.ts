import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { addCarsoul, addHomePost, addResearchData } from '../interfaces/admin.interface';
import { aimdata } from '../interfaces/aimdata.interface';
import { reviewers } from '../interfaces/board.interface';
import { complete } from '../interfaces/complete.interface';
import { headerData } from '../interfaces/headerData.interface';
import { backImg, HomeCarsoulData, homePosts } from '../interfaces/HomeData.interface';
import { instrctions } from '../interfaces/instructions.interface';
import { userprofileData } from '../interfaces/profileData.interface';
import { researchDetails, researches, researchTitle } from '../interfaces/research.interface';
import { review } from '../interfaces/reviewsData.interface';
import { data } from '../interfaces/revision.interface';
import { notes } from '../interfaces/submission.interface';
import { result } from '../interfaces/submissionResult.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  homeReviewsURL:string="assets/journalData/homeReviews.json";
  profileURL:string="assets/journalData/profileData.json";
  researchGroupTitleURL:string="assets/journalData/researchGroupTitle.json";
  researchesURL:string="assets/journalData/researches.json";
  researchDetailsURL:string="assets/journalData/researchDetails.json";

  
  //------------------------------------------- get data from json server ----------------------------------
  getHeaderData():Observable<headerData[]>{
    return this.http.get<headerData[]>("http://localhost:3000/header-data")
  }
  gethomeCarousel():Observable<HomeCarsoulData[]>{
    return this.http.get<HomeCarsoulData[]>("http://localhost:3000/home-carousel")
  }
  gethomeData():Observable<homePosts[]>{
    return this.http.get<homePosts[]>("http://localhost:3000/home-data")
  }
   getHomeReviews():Observable<review[]>{
    return this.http.get<review[]>(this.homeReviewsURL) //*********************************** */
   }
   getHomeBackImage():Observable<backImg>{
    return this.http.get<backImg>("http://localhost:3000/bg-image")
   }
   getProfileData():Observable<userprofileData[]>{
    return this.http.get<userprofileData[]>(this.profileURL) //*********************************** */
   }
   getBoard():Observable<instrctions[]>{
    return this.http.get<instrctions[]>("http://localhost:3000/board-data")
   }
   getBoardReviewer():Observable<reviewers[]>{
    return this.http.get<reviewers[]>("http://localhost:3000/board-reviewers")
   }
   getAimData():Observable<aimdata[]>{
    return this.http.get<aimdata[]>("http://localhost:3000/aim-data")
   }
   getInsturctions():Observable<instrctions[]>{
    return this.http.get<instrctions[]>("http://localhost:3000/instrctions-data")
   }
   getsubmissioncheck():Observable<notes[]>{
     return this.http.get<notes[]>("http://localhost:3000/researches-notes");
   }
   getRevisionData():Observable<data[]>{
     return this.http.get<data[]>("http://localhost:3000/revisions")
   }
   getresultData():Observable<result[]>{
    return this.http.get<result[]>("http://localhost:3000/revision-results")
   }
   getcompleted():Observable<complete[]>{
     return this.http.get<complete[]>("http://localhost:3000/complete-reseaches")
   }


   getresearchGroupTitle():Observable<researchTitle[]>{
    return this.http.get<researchTitle[]>(this.researchGroupTitleURL) //*********************************** */
  }
  getresearches():Observable<researches[]>{
    return this.http.get<researches[]>(this.researchesURL) //*********************************** */
  }
  getresearchDetails():Observable<researchDetails[]>{
    return this.http.get<researchDetails[]>(this.researchDetailsURL) //*********************************** */
  }

//------------------------------------------ add data-------------------------------------------------

  addHomeCarousel(data:HomeCarsoulData){
    this.http.post("http://localhost:3000/home-carousel",data).subscribe()
  }
  addHomData(data:homePosts){
    this.http.post("http://localhost:3000/home-data",data).subscribe()
  }
  addResearch(data:any){
    this.http.post("http://localhost:3000/researches",data).subscribe()
  }


  //----------------------------------------------------------------------------------------------------

  //------------------------------------------ delete data---------------------------------------------
  deleteHomeCarousel(id:number){
    this.http.delete(`http://localhost:3000/home-carousel/${id}`).subscribe()
  }
  deleteHomedata(id:number){
    this.http.delete(`http://localhost:3000/home-data/${id}`).subscribe()
  }
  //----------------------------------------------------------------------------------------------------

  updateHomeCarousel(id:number,data:any){
    this.http.put(`http://localhost:3000/home-carousel/${id}`,data).subscribe()
  }
  updateHomeData(id:number,data:any){
    this.http.put(`http://localhost:3000/home-data/${id}`,data).subscribe()
  }

}
