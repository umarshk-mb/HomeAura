import { Component, HostBinding, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRegisterComponent } from '../user-register/user-register.component';

@Component({
  selector: 'ha-user-login',
  standalone: true,
  imports: [FormsModule, UserRegisterComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {

  userLogin = signal(true)

  @HostBinding('class.login-page')

  formData = {
    userName: '',
    password: ''
  }

  login(): void {
    console.log(this.formData)
  }

  userRegistraion() {
    this.userLogin.update((reg) => !reg)

  }
}
