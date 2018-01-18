import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GraphQLModule} from './apollo.config';
import { AppComponent } from './app.component';
import { LinkItemComponent } from './link-item/link-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkItemComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
