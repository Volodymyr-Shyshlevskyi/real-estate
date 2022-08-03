import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {catchError, Observable, of, tap, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiAuthUrl = `${environment.apiUrl}/auth/login`

  constructor(private router: Router, private http: HttpClient) {
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {email: string, password: string}) {
    return this.http.post<{access_token: string}>(`${this.apiAuthUrl}`, {username: userInfo.email, password: userInfo.password}).pipe(
      tap(({access_token}) => this.setToken(access_token))
    )
  }


  logout(){
    if (confirm('Are you sure?')) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  } 
}
