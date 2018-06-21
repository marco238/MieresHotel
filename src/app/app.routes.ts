import { Routes } from '@angular/router';

import { PlanCardsComponent } from './components/plan-cards/plan-cards.component';

export const routes: Routes = [
  { path: 'home', component: PlanCardsComponent},
  { path: '', redirectTo: 'home', pathMatch: "full"},
  { path: '**', redirectTo: 'home', pathMatch: "full"}
];
