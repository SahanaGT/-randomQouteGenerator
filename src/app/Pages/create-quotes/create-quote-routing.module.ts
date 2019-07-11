import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateQuotesComponent } from './create-quotes.component';



const routes: Routes = [
  {
    path: '', component: CreateQuotesComponent
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CreateQuoteRoutingModule { }
export const routingComponents = [CreateQuotesComponent];
