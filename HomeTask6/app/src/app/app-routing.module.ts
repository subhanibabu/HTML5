import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'News', component: NewsComponent},
  {path: 'AddArticle', component: ArticleComponent},
  {path: 'NewsDetails', component: NewsdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
