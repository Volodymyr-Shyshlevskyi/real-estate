import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactUsFormComponent } from './components/form/form-request/form-request.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterPipe } from './components/contacts/pipes/filter.pipe';
import { ArticlePageComponent } from './components/news/article-page/article-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactFormModalComponent } from './components/contacts/contact-form-modal/contact-form-modal.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NewsComponent,
    ContactsComponent,
    ContactsDetailsComponent,
    AdminDashboardComponent,
    ContactUsFormComponent,
    FilterPipe,
    ArticlePageComponent,
    ContactFormModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,    
    MatSnackBarModule,
    FormsModule, 
    MatDialogModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }