import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Screen668769Service } from './screen668769.service';



@Component({
  selector: 'app-screen668769',
  templateUrl: './screen668769.component.html',
  styleUrls: ['./screen668769.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Screen668769Component implements OnInit {

  constructor(
private screen668769Service: Screen668769Service
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.screen668769Service.GpCreate(this.ibmentity)
  .subscribe(
    data => {
       console.log('data created successfully');
    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}