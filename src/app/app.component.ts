import { Component, ViewEncapsulation } from '@angular/core';
import { ThemeService, TableModule } from '@eds/angular';
import { TicketService } from './ticket.service';
import { TableComponent } from '@eds/angular/lib/components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  menuOpened = (window.innerWidth > 768);
  settingsOpened = false;
  isLightTheme = false;

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
