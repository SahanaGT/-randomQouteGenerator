import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListQuotesComponent } from './list-quotes.component';


const routes: Routes = [
  {
    path: '', component: ListQuotesComponent
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ListQuoteRoutingModule { }
export const routingComponents = [ListQuotesComponent];
