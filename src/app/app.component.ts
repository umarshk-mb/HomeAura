import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserLoginService } from './user-login.service';

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

  constructor(private userLoginService: UserLoginService) {
    this.title = 'HomeAura';
  }

  toggleMenu(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  userLogin() {
    this.userLoginService.userRegiestered.set(true)
  }
}
