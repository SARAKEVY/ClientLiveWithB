import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44355'

  constructor(private http: HttpClient) { }

  public login(credentials: { username: string, password: string }) {
    return this.http.post(this.apiUrl + '/api/Users/authenticate', credentials);
  }
  // https://localhost:44355/api/Users/authenticate?username=%D7%A2%D7%A2%D7%98&password=67
  logout() {
    // Remove token from local storage or wherever it's stored
  }

  isLoggedIn(): boolean {
    // Check if token exists and if it's valid
    return !!localStorage.getItem('token');
  }
}

