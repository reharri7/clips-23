import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {email: '', password: ''};
  showAlert = false;
  alertMsg = 'Please wait! We are logging you in.';
  alertColor = 'blue';
  inSubmission = false;
  constructor(private auth: AngularFireAuth) {
  }

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are logging you in.';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password);
    } catch (error) {
      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occurred. Please try again later.';
      this.alertColor = 'red';
      console.error(error);
      return;
    }
    this.alertMsg = 'You have been logged in successfully!';
    this.alertColor = 'green';
  }
}
