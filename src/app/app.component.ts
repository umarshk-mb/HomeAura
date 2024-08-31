import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DecorComponent } from './decor/decor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DecorComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string;
  isSideNavOpen = false;

  constructor() {
    this.title = 'HomeAura';
  }

  toggleMenu(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
