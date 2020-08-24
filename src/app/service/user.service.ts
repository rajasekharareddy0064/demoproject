import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, AbstractControl } from '@angular/forms';

interface ValidationResult {
  [key: string]: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.userUrl;

  loginData = new BehaviorSubject(null);
  loginDetails$  = this.loginData.asObservable();
  loginDetailFn(request: any | null) { this.loginData.next(request)}

  constructor(private http: HttpClient) { }

  public static passwordStrong(control: AbstractControl): ValidationResult {
    if (!control.value) {
      return null;
    }
    if (control.value.length < 8) {
      return { minlength: true };
    }
   
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/.test(control.value);
    if (valid) {
      return null;
    }
    return { patternStrong: true };
  }

  public static PasswordValidator(confirmPasswordInput: string) {
    let confirmPasswordControl: FormControl;
    let passwordControl: FormControl;
    return (control: FormControl) => {
      if (!control.parent) {
        return null;
      }
      if (!confirmPasswordControl) {
        confirmPasswordControl = control;
        passwordControl = control.parent.get(confirmPasswordInput) as FormControl;
        passwordControl.valueChanges.subscribe(() => {
          confirmPasswordControl.updateValueAndValidity();
        });
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        return {
          notMatch: true
        };
      }
      return null;
    };
  }
  postuserDetails(body): Observable<any> {
    const url = `${this.userUrl}/post`;
    return this.http.post<any>(url, body)
  }
  getUsers(): Observable<any>{
    const url = `${this.userUrl}/users`;
    return this.http.get<any>(url)
  }
}
