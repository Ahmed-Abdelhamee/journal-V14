import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminSettings2Component } from './admin-settings2/admin-settings2.component';
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
  {path:"jour-Admin-nal/:id",component:AdminComponent},
  {path:"admin-settings/:id",component:AdminSettingsComponent},
  {path:"admin-settings2/:id",component:AdminSettings2Component},
  {path:"new-researches",component:NewResearchesComponent},
  {path:"edit-delete-research",component:EditDeleteResearchComponent},
  {path:"about-us",component:AboutComponent},
  {path:"support",component:SupportComponent},
  {path:"contact",component:ContactComponent},




  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
