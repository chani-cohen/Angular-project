import { Component } from '@angular/core';
import { from } from 'rxjs';
import {LoginService} from './../../src/app/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// משתנה עזר לשמירת המשתמש הנוכחי
  login:any;
  //private כשנשתמש בסרביסים נגדיר בבנאי מופע מסוג הסרביס שיוגדר בהרשאה 
  constructor(private loginServer:LoginService){
     this.login = this.loginServer.getLogin();
  }


  date:Date = new Date();
  num:number = 35;

  obj: any={
    name: "chani",
    phone: "0583271227"
  }
}
