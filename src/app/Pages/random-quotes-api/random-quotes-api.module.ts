import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomQuoteApiRoutingModule } from './random-quote-api-routing.module';
import { RandomQuotesApiComponent } from './random-quotes-api.component';



@NgModule({
  imports: [
    CommonModule,
    RandomQuoteApiRoutingModule
  ],
  declarations: [RandomQuotesApiComponent]
})
export class RandomQuotesApiModule {}
