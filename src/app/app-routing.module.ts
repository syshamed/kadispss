import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { AssetsComponent } from './assets/assets.component';
import { AuthoringComponent } from './authoring/authoring.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { InsightComponent } from './insight/insight.component';
import { PCComponent } from './pc/pc.component';
import { PageNotFoundComponent } from './page-not-found';
import { SingleAnswerQuestionComponent } from './single-answer-question/single-answer-question.component';
import { MultipleAnswerQuestionComponent } from './multiple-answer-question/multiple-answer-question.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'authoring', },
  { path: 'authoring', component: AuthoringComponent },
  { path: 'SingleAnswerQuestion', component: SingleAnswerQuestionComponent },
  { path: 'MultipleAnswerQuestion', component: MultipleAnswerQuestionComponent },
  //{ path: 'data-collection', component: DataCollectionComponent },
  //{ path: 'insight', component: InsightComponent },
  { path: 'pcdesign', component: PCComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  AnalysisComponent,
  AssetsComponent,
  AuthoringComponent,
  DataCollectionComponent,
  InsightComponent,
  PCComponent,
  SingleAnswerQuestionComponent,
  MultipleAnswerQuestionComponent,
  PageNotFoundComponent
];