import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdIconModule, MdIconRegistry } from '@angular/material/icon';
import { AppRoutingModule, routableComponents } from './app-routing.module';


import { AppComponent} from './app.component';
import { AuthoringComponent } from './authoring/authoring.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { InsightComponent } from './insight/insight.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { AssetsComponent } from './assets/assets.component';
import { PCComponent } from './pc/pc.component';
import { SingleAnswerQuestionComponent } from './single-answer-question/single-answer-question.component';
import { MultipleAnswerQuestionComponent } from './multiple-answer-question/multiple-answer-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthoringComponent,
    DataCollectionComponent,
    InsightComponent,
    AnalysisComponent,
    AssetsComponent,
    routableComponents,
    PCComponent,
    SingleAnswerQuestionComponent,
    MultipleAnswerQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MdIconModule,
    AppRoutingModule
  ],
  providers: [
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
