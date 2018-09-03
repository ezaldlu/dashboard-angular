import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

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
  TableModule,
  AccordionModule
} from '@eds/angular';

import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePageComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    AccordionModule,
    BrowserModule,
    FormsModule,
    AppBarModule,
    ButtonModule,
    DropdownModule,
    GaugeModule,
    ProgressBarModule,
    SettingsModule,
    SwitchModule,
    SystemBarModule,
    TableModule,
    TileModule,
    TreeModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
