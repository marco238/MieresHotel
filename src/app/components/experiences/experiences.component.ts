import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  firstOption: any;
  secondOption: any;
  bigDropdown: any;
  firstExtraInfo: any;
  secondExtraInfo: any;
  secondExtraInfo: any;

  constructor() { }

  ngOnInit() {
    this.firstOption = document.querySelector('.sc1');
    this.secondOption = document.querySelector('.sc2');
    this.bigDropdown = document.querySelector('.sc2');
    this.firstExtraInfo = document.querySelector('.op1');
    this.secondExtraInfo = document.querySelector('.op2');
    this.bigPanel = document.querySelector('.plus');
  }

  toogleDropdown(dropdown) {
    switch(dropdown) {
      case 1: this.firstExtraInfo.classList.toggle("inactive");
              break;
      case 2: this.secondExtraInfo.classList.toggle("inactive");
              break;
      case 3: this.bigPanel.classList.toggle("bigPan");
              break;
    }
  }

}
