import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {iContact} from '../contacts/models/i-contact';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from '../contacts/services/contact.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {

  id!: number;
  user!: Observable<iContact>;

  constructor(private activatedRoute: ActivatedRoute, private adminService: ContactService) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user'] ))
  }

}