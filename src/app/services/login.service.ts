import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

// ממערך משתמשים
  private users= ["Agent","Customer"];
// משתנה ששומר לי את סוג המשתמש הנוכחי, שמחובר כרגע
  private currentUser = "Agent";
 // private currentUser = "Customer";

  constructor() { }

  getLogin(){
    return this.currentUser;
  }
}
