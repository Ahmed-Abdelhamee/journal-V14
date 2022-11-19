import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AuthorsapprovalComponent } from './authorsapproval/authorsapproval.component';
import { BoardComponent } from './board/board.component';
import { BoardReviewersDataComponent } from './board-reviewers-data/board-reviewers-data.component';
import { CompleteComponent } from './complete/complete.component';
import { Error404Component } from './error404/error404.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResearchCollectionComponent } from './research-collection/research-collection.component';
import { RevisioncheckComponent } from './revisioncheck/revisioncheck.component';
import { RevisionwaitingComponent } from './revisionwaiting/revisionwaiting.component';
import { SubmissioncheckComponent } from './submissioncheck/submissioncheck.component';
import { SubmitpaperComponent } from './submitpaper/submitpaper.component';
import { ZfooterComponent } from './zfooter/zfooter.component';
import { NewResearchesComponent } from './new-researches/new-researches.component';
import { EditDeleteResearchComponent } from './edit-delete-research/edit-delete-research.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminInstructionsComponent } from './admin-instructions/admin-instructions.component';
import { AdminAimComponent } from './admin-aim/admin-aim.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { AdminResearchesComponent } from './admin-researches/admin-researches.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminSupportComponent } from './admin-support/admin-support.component';

import { SecertApproveComponent } from './secert-approve/secert-approve.component';
import { SecertResearchNotesComponent } from './secert-research-notes/secert-research-notes.component';
import { SecertResearchCompletedComponent } from './secert-research-completed/secert-research-completed.component';
import { SecertResearchResultComponent } from './secert-research-result/secert-research-result.component';
import { SecertLoginComponent } from './secert-login/secert-login.component';
import { SecertRegisterComponent } from './secert-register/secert-register.component';
import { SecertaryComponent } from './secertary/secertary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    AdminSettingsComponent,
    AuthorsapprovalComponent,
    BoardComponent,
    BoardReviewersDataComponent,
    CompleteComponent,
    Error404Component,
    InstructionsComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ResearchCollectionComponent,
    RevisioncheckComponent,
    RevisionwaitingComponent,
    SubmissioncheckComponent,
    SubmitpaperComponent,
    ZfooterComponent,
    NewResearchesComponent,
    EditDeleteResearchComponent,
    AboutComponent,
    SupportComponent,
    ContactComponent,
    AdminHomeComponent,
    AdminInstructionsComponent,
    AdminAimComponent,
    AdminBoardComponent,
    AdminResearchesComponent,
    AdminAboutComponent,
    AdminProfileComponent,
    AdminContactComponent,
    AdminSupportComponent,
    SecertApproveComponent,
    SecertResearchNotesComponent,
    SecertResearchCompletedComponent,
    SecertResearchResultComponent,
    SecertLoginComponent,
    SecertRegisterComponent,
    SecertaryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
