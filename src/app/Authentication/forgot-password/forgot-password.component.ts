import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  userName: string | undefined;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  forgetPass() {
    console.log(this.userName);
    this.authService.forgotPassword(this.userName).subscribe(
      (response: any) => console.log('Login successful', response),
      // Handle login error
      (error: any) => console.error('Login error ', error)
    );
  }

}
