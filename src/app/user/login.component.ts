import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

import { Store } from '@ngrx/store';
import { State } from '../state/app.state';
import { getCurrentUser, getMaskUserName } from './state/user.reducer';
import { UserPageActions } from './state/actions';
import { User } from './user';
import { MyMonitoringService } from '../logging.service';

@Component({
  selector: 'mda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pageTitle = 'Log In';

  maskUserName$!: Observable<boolean>;
  currentUser$!: Observable<User | null>;

  constructor(private router: Router, private store: Store<State>, private authService: AuthService, private myMonitor: MyMonitoringService) {}
  ngOnInit(): void {
    this.maskUserName$ = this.store.select(getMaskUserName);
    this.currentUser$ = this.store.select(getCurrentUser);
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }
  checkChanged(): void {
    this.store.dispatch(UserPageActions.maskUserName());
  }
  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);
      this.myMonitor.logEvent('Login', {userName: userName, password: password});
      // log trace
      this.myMonitor.logTrace('Login', {userName: userName, password: password});

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/welcome']);
      }
      this.store.dispatch(UserPageActions.setCurrentUser({ currentUser: { id: 1, userName: userName, isAdmin: true } }));
    }
  }


}
