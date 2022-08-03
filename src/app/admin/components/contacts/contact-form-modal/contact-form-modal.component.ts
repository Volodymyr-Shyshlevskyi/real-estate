import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-form-modal',
  templateUrl: './contact-form-modal.component.html',
  styleUrls: ['./contact-form-modal.component.scss']
})
export class ContactFormModalComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telNumber: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)])
  });

  constructor(public dialogRef: MatDialogRef<ContactFormModalComponent>) { }

  ngOnInit(): void {
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

}
