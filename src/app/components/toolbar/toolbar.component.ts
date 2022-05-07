import { Component } from '@angular/core';
import { ThemeService } from '@services/theme/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  darkChecked = false;

  constructor(private themeService: ThemeService) {
    this.darkChecked = this.themeService.readStatus();
  }

  toggleTheme(): void {
    this.darkChecked = !this.darkChecked;
    this.themeService.toggleTheme(this.darkChecked);
  }
}
