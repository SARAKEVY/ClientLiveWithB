import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../MOdeles/user';
import { Observable } from 'rxjs';
import { NamePassUser } from '../MOdeles/NamePassUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7169/api/Users/'
  constructor(private http: HttpClient) { }
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
  }
  logUp(user: User) {
    return this.http.post(this.apiUrl +  'authenticate',user);
  }
  isLoggedIn(): boolean {
    // Check if token exists and if it's valid
    return !!localStorage.getItem('token');
  }
}

