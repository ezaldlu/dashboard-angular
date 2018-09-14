import { Component, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '@eds/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  menuOpened = (window.innerWidth > 768);
  settingsOpened = false;
  isLightTheme = true;

  constructor(private themeService: ThemeService) {}

  toggleTheme(isLight: boolean) {
    this.themeService.toggle(isLight);

    // Temporary event to switch the map theme
    const switchTheme = new CustomEvent('switchTheme', { detail: { theme: document.body.classList } });
    document.dispatchEvent(switchTheme);
  }

  menuHandler() {
    this.menuOpened = !this.menuOpened;
  }

  settingsHandler() {
    this.settingsOpened = !this.settingsOpened;
  }
}
