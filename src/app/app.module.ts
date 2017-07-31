import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule} from '@angular/material';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {AppRoutingModule} from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import {ApiService} from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    AppRoutingModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
