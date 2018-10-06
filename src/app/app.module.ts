/*
* Angular needs to know the pieces of your application fit together
  and what other files and libraries the app requires. This information
  is called the MetaData.
* Some of the metadata is in the @Component decorators that you added to 
  your component classes. Other critical metadata is in @NgModule decorators.  
* The most important @NgModule decorator annotates the top-level AppModule class.
* Every component must be declared in exactly one NgModule.
* 
*/

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }