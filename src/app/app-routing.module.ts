import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLayoutComponent} from '../app/Pages/page-layout/page-layout.component';
import { RandomQuotesApiComponent } from '../app/Pages/random-quotes-api/random-quotes-api.component';
import { CreateQuotesComponent } from '../app/Pages/create-quotes/create-quotes.component';
import { ListQuotesComponent } from '../app/Pages/list-quotes/list-quotes.component';

const routes: Routes = [
  {
    path: 'apiQuote',
    loadChildren: 'app/Pages/random-quotes-api/random-quotes-api.module#RandomQuoteApiRoutingModule'
  },
  {
    path: 'localQuote',
    loadChildren: 'random-quotes-local/random-quotes-local.module#RandomQuotesLocalRoutingModule'
  },
  {
    path: 'addQuote',
    loadChildren: 'create-quotes/create-quotes.module#CreateQuoteRoutingModule'
  },
  {
    path: 'listQuote',
    loadChildren: 'list-quotes/list-quotes.module#ListQuoteRoutingModule'
  },
  {
    path: '',
    redirectTo: '/apiQuote',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

