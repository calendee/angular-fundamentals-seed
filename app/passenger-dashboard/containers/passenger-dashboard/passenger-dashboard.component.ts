import { Component, OnInit } from '@angular/core';

import { Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit{

  passengers: Passenger[];

  constructor() {}

  ngOnInit() {

    console.log('ngOnInit!');
    this.passengers = [
      {
        id: 1,
        fullName: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      },
      {
        id: 2,
        fullName: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{name: 'Ted', age: 12}, {name: 'Chloe', age: 7}]
      },
      {
        id: 3,
        fullName: 'James',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      },
      {
        id: 4,
        fullName: 'Louise',
        checkedIn: true,
        checkInDate: null,
        children: null
      },
    ];
  }

  handleRemove(event) {
    console.log('Remove = ', event);
  }

  handleEdit(event) {
    console.log('Edit = ', event);
  }
}
