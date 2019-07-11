import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuotesApiComponent } from './random-quotes-api.component';



const routes: Routes = [
  {
    path: '', component: RandomQuotesApiComponent
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RandomQuoteApiRoutingModule { }
export const routingComponents = [];
