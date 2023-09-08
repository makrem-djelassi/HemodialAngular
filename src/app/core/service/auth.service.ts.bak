import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from '../models/user';
import {environment} from 'src/environments/environment';
import {RegisterRequest} from "../models/registerRequest";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
        JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
        .post<any>(`${environment.apiUrl}auth/authenticate`, {
          email,
          password,
        })
        .pipe(
      map((response) => {
          console.log('response' + response)
          // store user details and jwt token in local storage to keep user logged in between page refreshes
              response.user.token = response.token;
              localStorage.setItem('currentUser', JSON.stringify(response.user));
              this.currentUserSubject.next(response.user);
              return response.user;
            })
        );
  }

  register(registerRequest: RegisterRequest) {
    return this.http
        .post<any>(`${environment.apiUrl}auth/register`, registerRequest);
  }

  sendResetPasswordRequest(email: string) {
    const formData = new FormData();
    formData.append('email', email);
    return this.http.post<any>(`${environment.apiUrl}forgetPassword/`, formData)
  }

  resetPassword(token: string, password: string) {
    let params = new HttpParams();

    params = params.append('token', token);
    params =params.append('newPassword', password);

    return this.http
        .post<any>(`${environment.apiUrl}forgetPassword/resetPassword`, {}, {params: params})
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(JSON.parse('{}'))
    return of({success: false});
  }
}
