import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListQuoteRoutingModule } from './list-quote-routing.module';
import { ListQuotesComponent } from './list-quotes.component';


@NgModule({
  imports: [
    CommonModule,
    ListQuoteRoutingModule
  ],
  declarations: [ListQuotesComponent]
})
export class ListQuoteModule {}
