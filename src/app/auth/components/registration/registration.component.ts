import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup = new FormGroup({
    regEmail: new FormControl('', [Validators.required, Validators.email]),
    regPass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    regConfirmPass: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor() { }

  ngOnInit(): void {
  }

}
