import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { AssetsComponent } from './assets/assets.component';
import { AuthoringComponent } from './authoring/authoring.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { InsightComponent } from './insight/insight.component';
import { PCComponent } from './pc/pc.component';
import { PageNotFoundComponent } from './page-not-found';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'AuthoringComponent', },
  { path: 'authoring', component: AuthoringComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'data-collection', component: DataCollectionComponent },
  { path: 'insight', component: InsightComponent },
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
  PageNotFoundComponent
];