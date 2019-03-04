import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './ticket.service';
import { ScheduleService } from './schedule.service';
import { CountryunitService } from './countryunit.service';
import { CustomerService } from './customer.service';
import { CategoryService } from './category.service';
import { CategoryincService } from './categoryinc.service';
import { CategorynewService } from './categorynew.service';
import { CategoryqueueService } from './categoryqueue.service';
import { ProjectService } from './project.service';
import { UnshiftService } from './unshift.service';
import { IndicatorService } from './indicator.service';
import { UpperqueueService } from './upperqueue.service';
// import { ChartModule } from 'angular-highcharts';
// import {DataTableModule} from "angular-6-datatable";
import {NgxAutoScrollModule} from "ngx-auto-scroll";
import { NgxPaginationModule } from "ngx-pagination";
import { RouterModule, Routes } from '@angular/router';


import {
  AppBarModule,
  ButtonModule,
  GaugeModule,
  SettingsModule,
  SwitchModule,
  SystemBarModule,
  TreeModule,
  ThemeService,
  TileModule,
  DropdownModule,
  ProgressBarModule,
  TableModule

} from '@eds/angular';

import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ActivityComponent } from './pages/activity-dashboard/activity-dashboard.component';
import { QueueComponent } from './pages/queue-dashboard/queue-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityService } from './activity.service';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePageComponent,
    DashboardComponent,
    ActivityComponent,
    QueueComponent
  ],
  imports: [
    AppRoutingModule,
    // AccordionModule,
    BrowserModule,
    FormsModule,
    AppBarModule,
    ButtonModule,
    DropdownModule,
    GaugeModule,
    ProgressBarModule,
    SettingsModule,
    SwitchModule,
    NgxPaginationModule,
    SystemBarModule,
    TableModule,
    TileModule,
    TreeModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ThemeService,TicketService,ScheduleService,CountryunitService,CustomerService,CategoryService, CategoryincService, CategorynewService, ProjectService, UnshiftService, IndicatorService, NgxAutoScrollModule, CategoryqueueService, UpperqueueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
