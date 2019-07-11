import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuoteRoutingModule } from './create-quote-routing.module';
import { CreateQuotesComponent } from './create-quotes.component';

@NgModule({
  imports: [
    CommonModule,
    CreateQuoteRoutingModule
  ],
  declarations: [CreateQuotesComponent]
})
export class CreateQuotesModule {}
