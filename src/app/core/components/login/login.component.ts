import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  loginGoogle() {
    this.auth.loginGoogle();
  }

  loginFb() {
    this.auth.loginFb();
  }

  loginEmailPassword(formLogin) {
    this.auth.loginEmailPassword(formLogin, formLogin.value.email, formLogin.value.password);
  }

  register(formRegister) {
    this.auth.registerEmailPassword(formRegister, formRegister.value.email, formRegister.value.password);  
  }

}
