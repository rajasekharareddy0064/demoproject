import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';
declare var $:any;

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.scss']
})
export class LoginModuleComponent implements OnInit {
  loginForm: FormGroup;
  Subscription = new Subscription();
  registerData: any;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({      
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.Subscription.add(this.userService.loginDetails$.subscribe(
      next => {
          if(next && Object.keys(next.length>0)){
            this.registerData = next;
          }
      }
    ))
  }

  login(){
    console.log('adsf',this.loginForm.value );
    if(JSON.stringify(this.loginForm.value) === JSON.stringify(this.registerData)) {
      this.router.navigate(['user-details']);
    }else {
      alert('LoginDetails Not Found');
     // $('.toast').toast('show');
    }
   
  }

 ngOnDestroy(){
   this.Subscription.unsubscribe();
 }

}
