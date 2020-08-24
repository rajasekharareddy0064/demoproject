import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder, FormGroup, FormControl, Validators, AbstractControl, FormGroupDirective, NgForm,

} from '@angular/forms';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  detailsForm: FormGroup;
  genderData = [
    {genderValue: 'M', genderName: 'Male'},
    {genderValue: 'F', genderName: 'Female'},
  ]
  constructor(private router: Router,  private fb: FormBuilder, private userService: UserService) { }



  ngOnInit() {
    this.detailsForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', Validators.compose([Validators.email])),
      Gender: new FormControl('M'),
      mobile: new FormControl('', Validators.compose([Validators.required])),
      address:new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([Validators.required, UserService.passwordStrong])),
      confirmPassword: new FormControl('', Validators.compose([Validators.required, UserService.PasswordValidator('password')])),
    })
  }





  saveRegForm(data){

  //  let loginArray: Array<any> = [];
   let loginObject = Object.assign({});
   loginObject.email = this.detailsForm.controls.email.value,
   loginObject.password = this.detailsForm.controls.password.value;
  //  loginArray.push(loginObject);
   this.userService.loginDetailFn(loginObject);
   console.log(loginObject);
   this.router.navigate(['login']);
  
  }

  
}
