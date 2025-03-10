import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
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
