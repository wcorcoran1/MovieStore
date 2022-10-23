import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movies/movie.component';
import { MovieModule } from './movies/movie.module';
import { MovieServices } from './services/movie.services';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [MovieServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
