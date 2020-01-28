import { Injectable } from '@angular/core';
import { SystemConstants } from '../common/system.constants';
import { LoggedInUser } from '../model/loggedin.user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class AuthenService {

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    const body = 'userName=' + encodeURIComponent(username) +
      '&password=' + encodeURIComponent(password) +
      '&grant_type=password';
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    let promise = new Promise((resolve, reject) => {
      this._http.post(SystemConstants.BASE_API + '/api/oauth/token', body, {headers: headers})
        .subscribe((response: any) => {
          const user: LoggedInUser = response.json();
          console.log(user);
          if (user && user.access_token) {
            localStorage.removeItem(SystemConstants.CURRENT_USER);
            localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
            resolve(true);
          }
          else {
            reject(false);
          }
        }, error => {
          reject(error);
        });
    });
    return promise;
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }

  isUserAuthenticated(): boolean {
    const user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (user != null) {
      return true;
    }
    else {
      return false;
    }
  }

  getLoggedInUser(): LoggedInUser {
    let user: LoggedInUser;
    if (this.isUserAuthenticated()) {
      var userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      user = new LoggedInUser(userData.access_token,
        userData.username,
        userData.fullName,
        userData.email,
        userData.avatar);
    }
    else {
      user = null;
    }
    return user;
  }
  
}
