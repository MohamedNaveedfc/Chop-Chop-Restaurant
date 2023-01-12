import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FoodsComponent } from './foods/foods.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { AppetizerComponent } from './appetizer/appetizer.component';
import { DessertComponent } from './dessert/dessert.component';
import { BeveragesComponent } from './beverages/beverages.component';








const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent, pathMatch: 'full' },
  { path:'foods', component: FoodsComponent},
  { path:'about-us', component:AboutUsComponent},
  { path:'contact-us', component:ContactUsComponent},
  { path:'signin', component:SigninComponent},
  { path:'signup', component:SignupComponent},
  { path:'book', component:BookComponent},
  {path:'main-course/:id',component:MainCourseComponent },
  {path:'appetizer' ,component:AppetizerComponent},
  {path:'dessert' ,component:DessertComponent},
  {path:'beverages' ,component:BeveragesComponent}

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'})],
  exports: [RouterModule]

})
export class AppRoutingModule { }
