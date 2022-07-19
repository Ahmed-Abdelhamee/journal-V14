import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminComponent } from './admin/admin.component';
import { AimComponent } from './aim/aim.component';
import { AuthorsapprovalComponent } from './authorsapproval/authorsapproval.component';
import { BoardReviewersDataComponent } from './board-reviewers-data/board-reviewers-data.component';
import { BoardComponent } from './board/board.component';
import { CompleteComponent } from './complete/complete.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResearchCollectionComponent } from './research-collection/research-collection.component';
import { ResearchDetailsComponent } from './research-details/research-details.component';
import { RevisioncheckComponent } from './revisioncheck/revisioncheck.component';
import { RevisionwaitingComponent } from './revisionwaiting/revisionwaiting.component';
import { SubmissioncheckComponent } from './submissioncheck/submissioncheck.component';
import { SubmitpaperComponent } from './submitpaper/submitpaper.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"submitpaper",component:SubmitpaperComponent},
  {path:"aim",component:AimComponent},
  {path:"instructions",component:InstructionsComponent},
  {path:"board",component:BoardComponent},
  {path:"reviewers-data/:id",component:BoardReviewersDataComponent},
  {path:"profile",component:ProfileComponent},
  {path:"authorsapproval",component:AuthorsapprovalComponent},
  {path:"submissioncheck",component:SubmissioncheckComponent},
  {path:"revisioncheck",component:RevisioncheckComponent},
  {path :"revisionwaiting",component:RevisionwaitingComponent},
  {path:"complete",component:CompleteComponent},
  {path:"research-collection",component:ResearchCollectionComponent},
  {path:"research-collection/:id",component:ResearchCollectionComponent},
  {path:"research-details",component:ResearchDetailsComponent},
  {path:"research-details/:id",component:ResearchDetailsComponent},
  {path:"jour-Admin-nal",component:AdminComponent},
  {path:"admin-settings/:id",component:AdminSettingsComponent},



  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
