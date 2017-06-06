import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';
import { HTTPTestComponent } from './http-test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {RouterModule} from '@angular/router';
import {favoriteComponent} from './app.favorite';
import { favoriteService } from "./app-favorite.service";

@NgModule({
  declarations: [
    AppComponent,
    HTTPTestComponent,
    favoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      {
        path:"",redirectTo:'/Home',pathMatch:'full'
      },
      {
      path:'Home',
      component:HTTPTestComponent
     },
     {
      path:'Favorite',
      component:favoriteComponent
    }] )
  ],
  providers: [favoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
