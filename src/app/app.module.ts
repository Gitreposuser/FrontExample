import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbuttonComponent } from './navbutton/navbutton.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    NavbarComponent,
    NavbuttonComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
