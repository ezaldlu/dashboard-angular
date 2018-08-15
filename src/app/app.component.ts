import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  menuOpened = (window.innerWidth > 768);
  settingsOpened = false;

  menuHandler() {
    this.menuOpened = !this.menuOpened;
  }

  settingsHandler() {
    this.settingsOpened = !this.settingsOpened;
  }
}
