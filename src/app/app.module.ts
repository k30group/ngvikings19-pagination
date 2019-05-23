import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatPaginatorIntl } from '@angular/material';

import { PaginatorI18n} from './services/paginator-i18n.service';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MatTableModule, MatPaginatorModule],
  declarations: [AppComponent, TableComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: PaginatorI18n,
      deps: []
    }
  ]
})
export class AppModule { }
