import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {
  AppBarModule,
  ButtonModule,
  SettingsModule,
  SwitchModule,
  SystemBarModule,
  TreeModule,
  ThemeService,
  TileModule
} from '@eds/angular';

import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AppBarModule,
    ButtonModule,
    SettingsModule,
    SwitchModule,
    SystemBarModule,
    TileModule,
    TreeModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
