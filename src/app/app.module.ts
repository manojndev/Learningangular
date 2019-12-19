import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

/////uside all angular and library imports///////////////////////
import { AppRoutingModule } from './app-routing.module';


/////////////////////////////downside all are like component imports/////////////////////////////


import { AppComponent } from './app.component';
import {PostcreateComponent} from "./component/postcreatecomponent/postcreate.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

///////////////////////////////////all the material input///////////////////////////////////



import {MatInputModule,MatCardModule} from '@angular/material';





/////////////////////////////////////all the material input/////////////////////////////////




@NgModule({
  declarations: [
    AppComponent,
    PostcreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
//////material components////////////
MatInputModule,
MatCardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
