import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FoodsComponent } from './foods/foods.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { AppetizerComponent } from './appetizer/appetizer.component';
import { DessertComponent } from './dessert/dessert.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun as farSun, faStar as farStar, faMoon as farMoon} from '@fortawesome/free-regular-svg-icons';
import { faSun as fasSun, faStar as fasStar, faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStackOverflow, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FoodsComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    SigninComponent,
    SignupComponent,
    BookComponent,
    MainCourseComponent,
    AppetizerComponent,
    DessertComponent,
    BeveragesComponent,
    PageNotFoundComponent,
    TestComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

