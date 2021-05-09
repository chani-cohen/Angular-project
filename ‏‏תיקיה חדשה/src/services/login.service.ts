import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users = ["agent","customer"];
  private currentUser = {
    name: 'odaya',
    role: this.users[0],
  }

  getCurrentUser() {
    return this.currentUser;
  }
  
  constructor() { }
}
