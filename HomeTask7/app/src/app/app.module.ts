import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { FilterPipe} from './components/news/filter.pipe';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatNativeDateModule} from '@angular/material/core';
import { DemoMaterialModule} from './material-module';
import { MainService } from './services/main.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    ArticleComponent,
    LoginComponent,
    FilterPipe,
    NewsdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatNativeDateModule,DemoMaterialModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 }
