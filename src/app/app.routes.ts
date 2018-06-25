import { Routes } from '@angular/router';

import { PlanCardsComponent } from './components/plan-cards/plan-cards.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

export const routes: Routes = [
  { path: 'tab1', component: PlanCardsComponent, data: { depth: 1 }},
  { path: 'tab2', component: ExperiencesComponent, data: { depth: 2 }},
  { path: '', redirectTo: 'tab1', pathMatch: "full"}
];
