import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss'],
})
export class AddLinkComponent implements OnInit {
  linkForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this._initForm();
  }

  ngOnInit(): void {}
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.linkForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  submitForm() {
    const controls = this.linkForm.controls;
    /** check form */
    if (this.linkForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    const data = { ...this.linkForm.value };
    console.log(data);
    // this._store.dispatch(login(data));
  }

  private _initForm(): void {
    this.linkForm = this._formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      url: ['', Validators.compose([Validators.required])],
    });
  }
}
