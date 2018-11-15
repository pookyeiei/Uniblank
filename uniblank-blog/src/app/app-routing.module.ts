import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { ArticleListComponent } from './modules/components/article-list/article-list.component';
import { PageNotFoundComponent } from './modules/core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ArticleListComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
