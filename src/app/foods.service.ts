import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private http:HttpClient) { }

  baseUrl:String = "http://localhost/admin/";

  getFoodData(){
    return this.http.get<food[]>(this.baseUrl+'view_filter.php');
  }
}
