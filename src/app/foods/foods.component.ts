import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
 @Component({ selector: 'component-selector', templateUrl: './foods.component.html' }) export class MyComponent { constructor(private viewportScroller: ViewportScroller) {} public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); } }



@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
onClick(arg0: string) {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

}
