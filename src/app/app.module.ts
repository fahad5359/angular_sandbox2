import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import {PlayComponent} from "./play/Play.component";
import { AppComponent } from './app.component';
import {PlayComponent} from "./play/play.component";
import { PlayTwoComponent } from './play-two/play-two.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    PlayTwoComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
