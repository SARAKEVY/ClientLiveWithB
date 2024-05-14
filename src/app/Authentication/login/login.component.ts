import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../../MOdeles/user';
import { UserPipe } from 'src/app/pipes/user.pipe';
import { Guid } from 'guid-typescript';
import { NamePassUser } from 'src/app/MOdeles/NamePassUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  UserNP: NamePassUser = new NamePassUser();
  isLogUp = false;
  // user:User|(new ()=>User)=new User();
  user: User = new User();
  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.login();
    //if(this.user==undefined)this.user=new User();
  }

  login() {
    if (this.authService) {
      this.authService.login(this.UserNP).subscribe(
        // Handle successful login
        (response) => console.log('Login successful', response),
        // Handle login error
        (error) => console.error('Login error ', error)
      );
    }
  }
  logUP() {
    this.user.createdDate.getDate();
    this.authService.logUp(this.user).subscribe(
      (response) => console.log('LogUp successful', response),
      // Handle login error
      (error) => console.error('LogUp error ', error)
    );
  }
}