import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http : HttpClient) { }

  baseUrl : string = "http://localhost/admin/";

  getFoodDetails()
  {
    return this.http.get<food[]>(this.baseUrl+'/display_food.php');
  }
}
