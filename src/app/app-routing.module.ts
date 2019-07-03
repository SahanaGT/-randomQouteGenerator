import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLayoutComponent} from '../app/Pages/page-layout/page-layout.component';
import { RandomQuotesLocalComponent } from './Pages/random-quotes-local/random-quotes-local.component';
import { RandomQuotesApiComponent } from '../app/Pages/random-quotes-api/random-quotes-api.component';
import { CreateQuotesComponent } from '../app/Pages/create-quotes/create-quotes.component';
import { ListQuotesComponent } from '../app/Pages/list-quotes/list-quotes.component'


const routes: Routes = [
  {
    path: '', component: PageLayoutComponent,
    children: [
      { path: 'localQuote',  component : RandomQuotesLocalComponent },
      { path : 'apiQuote', component : RandomQuotesApiComponent},
      { path : 'addQuote', component : CreateQuotesComponent},
      { path : 'listQuote', component : ListQuotesComponent}
    ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RandomQuotesLocalComponent, RandomQuotesApiComponent,
                                  CreateQuotesComponent, ListQuotesComponent ];
