import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../../MOdeles/user';
import { UserPipe } from 'src/app/pipes/user.pipe';
import { Guid } from 'guid-typescript';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  // user:User|(new ()=>User)=new User();
  user: User = new User();
  constructor(private authService: AuthService) {
    this.user = new User();

  }

  ngOnInit(): void {
    this.login();
    //if(this.user==undefined)this.user=new User();
  }

   login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      // Handle successful login
      (response) => console.log('Login successful', response),
      // Handle login error
      (error) => console.error('Login error ', error)
    );
  }


}
