import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/Services/common-service.service';

@Component({
  selector: 'app-random-quotes-api',
  templateUrl: './random-quotes-api.component.html',
  styleUrls: ['./random-quotes-api.component.scss']
})
export class RandomQuotesApiComponent implements OnInit {

  constructor(private commonService: CommonServiceService ) { }

  ngOnInit() {
  }
  showConfig(){

  }

}
