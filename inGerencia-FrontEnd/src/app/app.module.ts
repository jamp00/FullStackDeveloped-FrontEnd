import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { materialModule } from './material.module';
import { HackerNewsComponent } from './components/hacker-news/hacker-news.component';

import { niceDateFormatPipe } from './services/format-date.service';


@NgModule({
  declarations: [
    AppComponent,
    HackerNewsComponent,
    niceDateFormatPipe
  ],
  imports: [
    BrowserAnimationsModule,
    materialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

