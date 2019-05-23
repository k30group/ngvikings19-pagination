import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports:      [ BrowserModule,   MatTableModule ],
  declarations: [ AppComponent, TableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
