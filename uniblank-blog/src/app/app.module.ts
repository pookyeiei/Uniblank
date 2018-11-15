import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { NavbarComponent } from './modules/core/components/navbar/navbar.component';
import { PageNotFoundComponent } from './modules/core/components/page-not-found/page-not-found.component';
import { PaggingComponent } from './modules/core/components/pagging/pagging.component';
import { SpinnerComponent } from './modules/core/components/spinner/spinner.component';
import { SystemMessageComponent } from './modules/core/components/system-message/system-message.component';
import { SafeHtmlPipe } from './modules/core/pipes/safe-html.pipe';
import { HomeComponent } from './modules/components/home/home.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { ArticleListComponent } from './modules/components/article-list/article-list.component';
import { HeaderComponent } from './modules/core/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    PaggingComponent,
    SpinnerComponent,
    SystemMessageComponent,
    SafeHtmlPipe,
    HomeComponent,
    ContactComponent,
    ArticleListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
