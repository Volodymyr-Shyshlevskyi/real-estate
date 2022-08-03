import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/components/login/login.component';
import { NotFoundComponent } from './auth/components/not-found/not-found.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth/auth.interceptor';
import { RegistrationComponent } from './auth/components/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,    
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }