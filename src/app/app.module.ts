import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { ButtonModule, SettingsModule, SystemBarModule, AppBarModule, TreeModule } from '@eds/angular';
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
    AppBarModule,
    ButtonModule,
    SettingsModule,
    SystemBarModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
