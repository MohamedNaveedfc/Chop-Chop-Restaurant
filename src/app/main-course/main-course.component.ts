import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { food } from '../food';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.scss']
})
export class MainCourseComponent implements OnInit {

  foodvalues:food[]=[];

  constructor(private food:FoodsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let cat_name = this.route.snapshot.paramMap.get('id');

    alert(cat_name);

    this.food.getFoodData().subscribe(
        (data:any)=>{
                  alert(data);
                  this.foodvalues = data;
                  this.foodvalues = this.foodvalues.filter(
                    (result:any)=>{
                          return result.fdtype === cat_name;
                    }
                  );
        }
    );

  }


}
