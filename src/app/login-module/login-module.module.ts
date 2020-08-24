import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginModuleComponent } from './login-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginModuleComponent],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModuleModule { }
