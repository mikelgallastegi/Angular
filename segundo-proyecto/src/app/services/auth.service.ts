import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private  router : Router) { }

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', { email: email, password: password })
      .subscribe((res) => {
        localStorage.setItem('access_token', res.token)
        this.router.navigate(['/']);
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  register(email: string, password: string) {
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    //Validar el token en el servidor
    return token != null;
  }
}
