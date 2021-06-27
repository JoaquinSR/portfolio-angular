import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    data: {
      title: 'Portfolio Homepage',
      description: 'Joaquin portfolio home page',
      ogTitle: 'Joaquin portfolio home page',
    }
  },
  {
    path: 'news', component: NewsComponent,
    data: {
      title: 'Portfolio ApiNews',
      description: 'Joaquin portfolio news page',
      ogTitle: 'Joaquin portfolio news page',
    }
  },
  {
    path: 'contact', component: ContactComponent,
    data: {
      title: 'Portfolio Contact',
      description: 'Joaquin portfolio contact page',
      ogTitle: 'Joaquin portfolio contact page',
    }
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }

  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
