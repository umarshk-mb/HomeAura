import { Component, HostBinding, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserAuthService, UserInterface } from '../user-auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ha-user-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {
  
  constructor(private fb: FormBuilder, private userLogin: UserAuthService, private http: HttpClient) {}
  @HostBinding('class.registration-page')

  
  registerForm = this.fb.group({
    name: [''],
    dob: [''],
    phone: [''],
    city: [''],
    email: [''],
    password: [''],
    confirmPassword: ['']
  });
  
  submit() {
    this.http.post<{user: UserInterface}>('https://api.realworld.io/api/users', 
    {
      user: this.registerForm.getRawValue(),
    })
    .subscribe((userReg) => console.log(userReg))
  }

  userRegister() {
    this.userLogin.userRegiestered.update((reg) => !reg);
  }

}
