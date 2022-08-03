import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactsDetailsComponent} from './components/contacts-details/contacts-details.component';
import {NewsComponent} from './components/news/news.component';
import {UserResolver} from './components/contacts-details/resolvers/contact.resolver';
import {UsersResolver} from './components/contacts/resolvers/contacts.resolver';
import { ContactUsFormComponent } from './components/form/form-request/form-request.component';
import { ArticlePageComponent } from './components/news/article-page/article-page.component';
import { ArticleResolver } from './components/news/article.resolver';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      {
        path: 'contacts',
        component: ContactsComponent,
        resolve: {
          users: UsersResolver
        }
      },
      {
        path: 'contacts/user/:id', component: ContactsDetailsComponent, resolve: {
          user: UserResolver
        }
      },
      {
        path: 'charts',
        loadChildren: () => import('./components/charts/charts.module').then((m) => m.ChartsModule)
      },
      {path: 'contacts/user', redirectTo: 'contacts', pathMatch: 'full'},
      {path: 'news', component: NewsComponent},
      { path: 'news/:id', 
        component: ArticlePageComponent,
        resolve: {
          article: ArticleResolver
        }
      },
      {path: 'contact-us', component: ContactUsFormComponent},
      {
        path: 'todo-list',
        loadChildren: () => import('./components/todo-list/todo-list.module').then((m) => m.TodosModule)
      },
      {path: '', redirectTo: 'news', pathMatch: 'full'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}