import { Component, HostBinding, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'ha-user-login',
  standalone: true,
  imports: [FormsModule, UserRegisterComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {

  registeredUser = signal(true);
  constructor(private userLogin: UserAuthService) {
    this.registeredUser = this.userLogin.userRegiestered;
  }
  
  @HostBinding('class.login-page')
  
  formData = {
    userName: '',
    password: ''
  }
  
  login(): void {
    console.log(this.formData)
  }
  
  userRegistraion() {
    this.userLogin.userRegiestered.update((reg) => !reg);
  }
}
