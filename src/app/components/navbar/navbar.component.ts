import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tab1: any;
  tab2: any;

  constructor() { }

  ngOnInit() {
    this.tab1 = document.querySelector('.tab1');
    this.tab2 = document.querySelector('.tab2');
  }

  toogleTabs() {
    this.tab1.classList.toggle("inactive");
    this.tab1.classList.toggle("active");
    this.tab2.classList.toggle("inactive");
    this.tab2.classList.toggle("active");
  }
}
