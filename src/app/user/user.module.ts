import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', userReducer)
  ]
})
export class UserModule { }
