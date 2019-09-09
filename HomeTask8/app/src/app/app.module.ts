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
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { AdBannerComponent } from '././components/dynamicAds/ad-banner.component';
import { HeroJobAdComponent } from '././components/dynamicAds/hero-job-ad.component';
import { HeroProfileComponent } from '././components/dynamicAds/hero-profile.component';
import { AdDirective } from '././components/dynamicAds/ad.directive';
import { AdService } from '././components/dynamicAds/ad.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    ArticleComponent,
    LoginComponent,
    FilterPipe,
    NewsdetailsComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
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
  providers: [MainService,AuthGuard,AuthService,AdService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 }
