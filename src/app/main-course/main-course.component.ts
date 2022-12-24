import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.scss']
})
export class MainCourseComponent implements OnInit {

  constructor(private foods : FoodService,private route : ActivatedRoute) { }

  record : any;

  ngOnInit(): void {

    //let category_name = this.route.snapshot.paramMap.get('');

    this.foods.getFoodDetails().subscribe(
      (data: any) => {
            console.log(data);

            this.record = data;
      }

    );


  }

}
