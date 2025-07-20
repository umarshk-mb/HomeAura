import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {

  constructor() { }

  userRegiestered = signal(true);
}
