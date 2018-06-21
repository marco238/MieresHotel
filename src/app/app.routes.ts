import { Routes } from '@angular/router';

import { PlanCardsComponent } from './components/plan-cards/plan-cards.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

export const routes: Routes = [
  { path: 'tab1', component: PlanCardsComponent},
  { path: 'tab2', component: ExperiencesComponent},
  { path: '', redirectTo: 'tab1', pathMatch: "full"},
  { path: '**', redirectTo: 'tab1', pathMatch: "full"}
];
