import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanCardsComponent } from './components/plan-cards/plan-cards.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanCardsComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
