import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanCardsComponent } from './components/plan-cards/plan-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
