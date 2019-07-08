import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/Services/common-service.service';

@Component({
  selector: 'app-random-quotes-api',
  templateUrl: './random-quotes-api.component.html',
  styleUrls: ['./random-quotes-api.component.scss']
})
export class RandomQuotesApiComponent implements OnInit {
  public quotesList: any;
  public localQouteList: string;
  public showBtn = false;
  public fromLocal: string;
  constructor(private commonService: CommonServiceService ) { }

  ngOnInit() {
    this.showQuotes();
    localStorage.setItem( 'quote', '');
  }
  showQuotes() {
    this.commonService.getQuotes().subscribe((res) => {
      console.log(res);
      this.quotesList = res;
      this.showBtn = false;
    });
  }

  // This method will call when click on save button
  saveLocal(data) {
    this.fromLocal = localStorage.getItem('quote');
    const variableref =  this.fromLocal.concat( '@' + data);
    localStorage.setItem( 'quote', variableref);
    this.showBtn = true;
  }

}
