import {Component, OnInit} from '@angular/core';
import {filter, Observable, switchMap} from 'rxjs';
import {iContact} from './models/i-contact';
import {ContactService} from './services/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormModalComponent } from './contact-form-modal/contact-form-modal.component';
 

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  search = '';

  personalList$!: Observable<iContact[]>;

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telNumber: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)])
  });

  constructor(private dialog: MatDialog, private contactService: ContactService) {
  }

  deletePerson(id:number) {
    this.contactService.deletePerson(id).subscribe();
  }



  addNewPerson() {
    this.dialog.open(ContactFormModalComponent, {
      width:'32%',
      autoFocus: false
    })
      .afterClosed().pipe(
        filter((res) => res!!),
        switchMap((res) => this.contactService.addNewPerson(res))
      )
      .subscribe();
    }

  ngOnInit(): void {
    this.personalList$ = this.contactService.usersList$;
  }
}