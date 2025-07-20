import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserAuthService } from './user-auth.service';
import { NgStyle } from '@angular/common';

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

  constructor(private UserAuthService: UserAuthService) {
    this.title = 'HomeAura';
  }

  toggleMenu(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  userLogin() {
    this.UserAuthService.userRegiestered.set(true)
  }
}
