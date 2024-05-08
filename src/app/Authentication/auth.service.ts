import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }) {
    return this.http.post('/api/login', credentials);
  }

  logout() {
    // Remove token from local storage or wherever it's stored
  }

  isLoggedIn(): boolean {
    // Check if token exists and if it's valid
    return !!localStorage.getItem('token');
  }
}

