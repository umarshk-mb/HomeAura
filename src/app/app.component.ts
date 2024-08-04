import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DecorComponent } from './decor/decor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DecorComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'HomeAura';
  }
}
