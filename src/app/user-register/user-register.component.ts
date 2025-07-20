import { Component, HostBinding, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'ha-user-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {
  
  constructor(private fb: FormBuilder, private userLogin: UserLoginService) {}
  @HostBinding('class.registration-page')

  userRegister() {
    this.userLogin.userRegiestered.update((reg) => !reg);
  }

  registerForm = this.fb.group({
    name: [''],
    dob: [''],
    phone: [''],
    city: [''],
    email: [''],
    password: [''],
    confirmPassword: ['']
  })
}
