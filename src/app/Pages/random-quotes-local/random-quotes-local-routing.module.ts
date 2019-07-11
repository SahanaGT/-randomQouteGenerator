import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuotesLocalComponent } from './random-quotes-local.component';




const routes: Routes = [
  {
    path: '', component: RandomQuotesLocalComponent
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RandomQuotesLocalRoutingModule { }
export const routingComponents = [];
