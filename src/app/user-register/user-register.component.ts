import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'ha-user-register',
  standalone: true,
  imports: [ReactiveFormsModule, UserLoginComponent],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {

  register = signal(true);

  constructor(private fb: FormBuilder) {}

  userRegister() {
    this.register.update((reg) => !reg)
  }

  registerForm = this.fb.group({
    name: [''],
    dob: [''],
    phone: [''],
    city: [''],
    email: [''],
    password: ['']
  })
}
