import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
orderStatus:any;
data:Observable<any>

  constructor() { }

  ngOnInit(): void {
    this.data=new Observable(observer=>{
      setTimeout(() => {
        observer.next('in progress')
      },4000);
      // bussiness logic
      setTimeout(() => {
        observer.next(' proccessing')
      },8000);
      // business logic
      setTimeout(() => {
        observer.next('completed')
      },12000);
    });
    this.data.subscribe(val=>{
      this.orderStatus=val;
    });
  }

}
