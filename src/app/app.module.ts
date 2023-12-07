import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PieComponent } from './pie/pie.component';
import { RecordComponent } from './record/record.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GridsterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HighchartsChartModule
  ], declarations: [
    AppComponent,
    PieComponent,
    RecordComponent
  ],schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
