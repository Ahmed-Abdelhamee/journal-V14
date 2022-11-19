import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminAimComponent } from './admin-aim/admin-aim.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminInstructionsComponent } from './admin-instructions/admin-instructions.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminResearchesComponent } from './admin-researches/admin-researches.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminSupportComponent } from './admin-support/admin-support.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorsapprovalComponent } from './authorsapproval/authorsapproval.component';
import { BoardReviewersDataComponent } from './board-reviewers-data/board-reviewers-data.component';
import { BoardComponent } from './board/board.component';
import { CompleteComponent } from './complete/complete.component';
import { ContactComponent } from './contact/contact.component';
import { EditDeleteResearchComponent } from './edit-delete-research/edit-delete-research.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LoginComponent } from './login/login.component';
import { NewResearchesComponent } from './new-researches/new-researches.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResearchCollectionComponent } from './research-collection/research-collection.component';
import { RevisioncheckComponent } from './revisioncheck/revisioncheck.component';
import { RevisionwaitingComponent } from './revisionwaiting/revisionwaiting.component';
import { SecertApproveComponent } from './secert-approve/secert-approve.component';
import { SecertLoginComponent } from './secert-login/secert-login.component';
import { SecertRegisterComponent } from './secert-register/secert-register.component';
import { SecertResearchCompletedComponent } from './secert-research-completed/secert-research-completed.component';
import { SecertResearchNotesComponent } from './secert-research-notes/secert-research-notes.component';
import { SecertResearchResultComponent } from './secert-research-result/secert-research-result.component';
import { SecertaryComponent } from './secertary/secertary.component';
import { SubmissioncheckComponent } from './submissioncheck/submissioncheck.component';
import { SubmitpaperComponent } from './submitpaper/submitpaper.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"submitpaper",component:SubmitpaperComponent},
  {path:"aim",loadChildren : ()=> import("./aim/aim.module").then(m => m.AimModule)},
  {path:"instructions",component:InstructionsComponent},
  {path:"board",component:BoardComponent},
  {path:"reviewers-data/:groubName",component:BoardReviewersDataComponent},
  {path:"profile",component:ProfileComponent},
  {path:"authorsapproval",component:AuthorsapprovalComponent},
  {path:"submissioncheck",component:SubmissioncheckComponent},
  {path:"revisioncheck",component:RevisioncheckComponent},
  {path :"revisionwaiting",component:RevisionwaitingComponent},
  {path:"complete",component:CompleteComponent},
  {path:"research-collection",component:ResearchCollectionComponent},
  {path:"research-collection/:id",component:ResearchCollectionComponent},
  {path:"new-researches",component:NewResearchesComponent},
  {path:"edit-delete-research",component:EditDeleteResearchComponent},
  {path:"about-us",component:AboutComponent},
  {path:"support",component:SupportComponent},
  {path:"contact",component:ContactComponent},

  {path:"jour-Admin-nal",component:AdminComponent},
  {path:"admin-settings",component:AdminSettingsComponent},
  {path:"admin-home",component:AdminHomeComponent},
  {path:"admin-instructions",component:AdminInstructionsComponent},
  {path:"admin-aim",component:AdminAimComponent},
  {path:"admin-board",component:AdminBoardComponent},
  {path:"admin-researches",component:AdminResearchesComponent},
  {path:"admin-about",component:AdminAboutComponent},
  {path:"admin-profile",component:AdminProfileComponent},
  {path:"admin-contact",component:AdminContactComponent},
  {path:"admin-support",component:AdminSupportComponent},
  // {path:"",component:},

  {path:"jour-secertary-nal",component:SecertaryComponent},
  {path:"secert-approve",component:SecertApproveComponent},
  {path:"secert-sendingNotes",component:SecertResearchNotesComponent},
  {path:"secert-compeletedResearch",component:SecertResearchCompletedComponent},
  {path:"secert-research-result",component:SecertResearchResultComponent},
  {path:"secert-login",component:SecertLoginComponent},
  {path:"secert-register",component:SecertRegisterComponent},



  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
