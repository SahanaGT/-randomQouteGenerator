import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomQuotesLocalRoutingModule } from './random-quotes-local-routing.module';
import { RandomQuotesLocalComponent } from './random-quotes-local.component';



@NgModule({
  imports: [
    CommonModule,
    RandomQuotesLocalRoutingModule
  ],
  declarations: [RandomQuotesLocalComponent]
})
export class RandomQuotesApiModule {}
