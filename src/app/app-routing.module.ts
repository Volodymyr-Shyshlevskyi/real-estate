import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/components/login/login.component';
import {NotFoundComponent} from './auth/components/not-found/not-found.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import {AuthGuard} from './auth/guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },
  {path: 'login/registration', component: RegistrationComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }