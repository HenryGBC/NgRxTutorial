import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/core/store/auth/auth.actions';
import * as authSelectors from '../../core/store/auth/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasErrorLogin$: Observable<boolean>;
  loginErrorMsg$: Observable<string>;

  constructor(private _formBuilder: FormBuilder, private _store: Store) {
    this._initForm();
    this.hasErrorLogin$ = this._store.select(
      authSelectors.selectIsAuthStateLoginError
    );
    this.loginErrorMsg$ = this._store.select(
      authSelectors.selectIsAuthStateLoginErrorMsg
    );
  }

  ngOnInit(): void {}

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  submitForm() {
    const controls = this.loginForm.controls;
    /** check form */
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    const data = { ...this.loginForm.value };
    console.log(data);
    this._store.dispatch(login(data));
  }

  private _initForm(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}
