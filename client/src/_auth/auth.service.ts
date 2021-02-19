import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthCookieModel} from "./models/auth-cookie-model";
import {CookieService} from "ngx-cookie-service";

const AUTH_COOKIE_KEY = '_auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authData = new BehaviorSubject<AuthCookieModel>(null);

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {
    this.getAuthDataFromCookie();
  }

  get isAuth$(): Observable<boolean> {
    return this.authData.pipe(map(d => !!d));
  }

  login(email: string, password: string, remember: boolean = false): Observable<any> {
    const body = {
      email, password, remember
    };
    return this.httpClient.post(`/api/_auth/login`, body).pipe(
      tap(res => this.handleLoginSuccess(res))
    );
  }

  logout(): void {
    this.cookieService.delete(AUTH_COOKIE_KEY);

    this.authData.next(null);
  }

  private handleLoginSuccess(res: any): void {
    const {
      f_name,
      l_name,
      m_name,
      pre_name,
      email,
      access_token,
      expires_at
    } = res;

    const authCookieData = new AuthCookieModel(
      email, f_name, m_name, l_name, pre_name, access_token, expires_at
    );

    this.authData.next(authCookieData);
    this.cookieService.set(AUTH_COOKIE_KEY, JSON.stringify(authCookieData), expires_at);
  }

  private getAuthDataFromCookie(): void {
    const authDataStr = this.cookieService.get(AUTH_COOKIE_KEY);

    if (authDataStr) {
      this.authData.next(JSON.parse(authDataStr));
    }
  }
}
