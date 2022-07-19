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
import { AimComponent } from './aim/aim.component';
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
import { ResearchDetailsComponent } from './research-details/research-details.component';
import { RevisioncheckComponent } from './revisioncheck/revisioncheck.component';
import { RevisionwaitingComponent } from './revisionwaiting/revisionwaiting.component';
import { SubmissioncheckComponent } from './submissioncheck/submissioncheck.component';
import { SubmitpaperComponent } from './submitpaper/submitpaper.component';
import { ZfooterComponent } from './zfooter/zfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    AdminSettingsComponent,
    AimComponent,
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
    ResearchDetailsComponent,
    RevisioncheckComponent,
    RevisionwaitingComponent,
    SubmissioncheckComponent,
    SubmitpaperComponent,
    ZfooterComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }