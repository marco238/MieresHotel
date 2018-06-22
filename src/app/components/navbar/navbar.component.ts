import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tab1: any;
  tab2: any;
  tab1IsActive: Boolean = true;

  constructor() { }

  ngOnInit() {
    this.tab1 = document.querySelector('.tab1');
    this.tab2 = document.querySelector('.tab2');
  }

  toogleTabs(tab) {
    if(tab == 1 && !this.tab1IsActive) {
    this.tab1IsActive = !this.tab1IsActive;
  }
    if(tab == 2 && this.tab1IsActive) {
    this.tab1IsActive = !this.tab1IsActive;
  }
}
