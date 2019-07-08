import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-quotes-local',
  templateUrl: './random-quotes-local.component.html',
  styleUrls: ['./random-quotes-local.component.scss']
})
export class RandomQuotesLocalComponent implements OnInit {

  localData: any;
  list = [];
  constructor() { }

  ngOnInit() {
    this.showLocalQuotes();
  }
  showLocalQuotes() {
     this.localData = localStorage.getItem('quote');
     this.list =  this.localData .split('@');
     console.log(this.list);
  }
}
