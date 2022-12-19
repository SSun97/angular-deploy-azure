import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { UserPageActions } from 'src/app/user/state/actions';

import { User } from 'src/app/user/user';

import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'mda-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pageTitle = 'Acme Product Management';
  currentUser$: Observable<User> | undefined

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router, private authService: AuthService, private store: Store<State>) { }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logout();
    this.store.dispatch(UserPageActions.clearCurrentUser());
    this.router.navigate(['/welcome']);
  }
}