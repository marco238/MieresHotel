import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-cards',
  templateUrl: './plan-cards.component.html',
  styleUrls: ['./plan-cards.component.css']
})
export class PlanCardsComponent implements OnInit {
  card1: any;
  card2: any;
  card3: any;
  card4: any;
  card5: any;

  constructor() { }

  ngOnInit() {
    this.card1 = document.querySelector('.c1 input');
    this.card2 = document.querySelector('.c2 input');
    this.card3 = document.querySelector('.c3 input');
    this.card4 = document.querySelector('.c4 input');
    this.card5 = document.querySelector('.c5 input');
  }

  refresh() {
    this.card1 = document.querySelector('.c1 input');
    this.card2 = document.querySelector('.c2 input');
    this.card3 = document.querySelector('.c3 input');
    this.card4 = document.querySelector('.c4 input');
    this.card5 = document.querySelector('.c5 input');
  }

}
