import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authenticated, IUser, loading } from './auth.reducer';
import { Credentials } from '@mdv11/core-data';
import { Store } from '@ngrx/store';
import { AppState } from '@mdv11/core-state';
import { authenticate as authenticateAction, logout } from './auth.actions';

@Injectable({providedIn: 'root'})
export class AuthFacade {
  get authenticated$(): Observable<boolean> {
    return this.store.select(authenticated);
  }

  get loading$(): Observable<boolean> {
    return this.store.select(loading);
  }

  constructor(private store: Store<AppState>) {}


  authenticate(credentials: Credentials) {
    this.store.dispatch(authenticateAction({credentials}));
  }

  logout() {
    this.store.dispatch(logout());
  }
}
