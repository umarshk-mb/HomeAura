import { Injectable, signal } from '@angular/core';

export interface UserInterface {
  email: string,
  userName: string,
  token: string
}

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {

  constructor() { }

  userRegiestered = signal(true);
}
