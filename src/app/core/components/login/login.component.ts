import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService, private af: AngularFireAuth) {
  }

  login() {
    this.auth.login();
  }

  email: string = "siemanko@gmail.com";
  password: string = "1234567";

  register() {
    this.af.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(authState => console.log('EGISTER-THEN', authState))
    .catch(error => console.log('REGISTER-ERROR', error));
  }

}
