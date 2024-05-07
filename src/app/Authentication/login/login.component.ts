import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent {
  username: string='';
  password: string='';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      // Handle successful login
      (response) => console.log('Login successful', response),
      // Handle login error
      (error) => console.error('Login error', error)
    );
  }
}
