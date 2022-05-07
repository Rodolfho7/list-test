import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private htmlReference: HTMLHtmlElement | null;

  constructor(private storageService: StorageService) {
    this.htmlReference = document.querySelector('html');
  }

  toggleTheme(themeDark: boolean): void {
    this.storageService.setItem('list-test-theme', themeDark ? 'dark' : '');
    this.htmlReference?.classList.toggle('dark');
  }

  readStatus(): boolean {
    const darkStatus = this.storageService.getItem('list-test-theme');
    if (darkStatus) {
      this.setDarkMode();
    }
    return darkStatus ? true : false;
  }

  setDarkMode(): void {
    this.htmlReference?.classList.add('dark');
  }
}
