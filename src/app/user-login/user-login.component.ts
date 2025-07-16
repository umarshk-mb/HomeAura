import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ha-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {

  @HostBinding('class.login-page')

  formData = {
    userName: '',
    password: ''
  }

  login(): void {
    console.log(this.formData)
  }
}
