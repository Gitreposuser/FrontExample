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
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MangaComponent } from './pages/manga/manga.component';
import { MangaheaderComponent} from './mangacomponents/mangaheader/mangaheader.component';
import { MangafooterComponent } from './mangacomponents/mangafooter/mangafooter.component';
import { MangahomeComponent } from './mangacomponents/mangahome/mangahome.component';
import { MangaelementComponent } from './mangacomponents/mangaelement/mangaelement.component';

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
    FooterComponent,
    PagenotfoundComponent,
    MangaComponent,
    MangaheaderComponent,
    MangafooterComponent,
    MangahomeComponent,
    MangaelementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }