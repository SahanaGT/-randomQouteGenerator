import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './Pages/page-layout/page-layout.component';
import { RandomQuotesLocalComponent } from './Pages/random-quotes-local/random-quotes-local.component';
import { RandomQuotesApiComponent } from './Pages/random-quotes-api/random-quotes-api.component';
import { CreateQuotesComponent } from './Pages/create-quotes/create-quotes.component';
import { ListQuotesComponent } from './Pages/list-quotes/list-quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    RandomQuotesLocalComponent,
    RandomQuotesApiComponent,
    CreateQuotesComponent,
    ListQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
