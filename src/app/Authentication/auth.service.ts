import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../MOdeles/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { NamePassUser } from '../MOdeles/NamePassUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User|null>;
  public user: Observable<User|null>;
  public token?:string;

  apiUrl = process.env["urlApi"]+'Users/';
  constructor(private http: HttpClient, private router: Router) { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }
  public get userValue() {
    return this.userSubject.value;
}

  forgotPassword(userName: string | undefined): Observable<any> {
    return this.http.get(this.apiUrl + 'forgotPassword?userName=' + userName);
  }
  public login(credentials: NamePassUser):Observable<any>{
    console.log(credentials);  
   //return this.http.post('https://localhost:44355/api/Users/authenticate?username=%D7%9E%D7%99%D7%A8%D7%99&password=1234567890');
   if (!credentials.username ||!credentials.password) {   
 }
   return this.http.post(this.apiUrl + 'authenticate', credentials);
  }
  // https://localhost:44355/api/Users/authenticate?username=%D7%A2%D7%A2%D7%98&password=67
  logout() {
    // Remove token from local storage or wherever it's stored
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }
  logUp(user: User) {
    return this.http.post(this.apiUrl +  'authenticate',user);
  }
  isLoggedIn(): boolean {
    // Check if token exists and if it's valid
    return !!localStorage.getItem('token');
  }
}

