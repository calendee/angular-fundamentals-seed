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
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id
    });
  }

  handleEdit(event: Passenger) {
    console.log('Edit = ', event);
    this.passengers = this.passengers.map((passenger: Passenger) =>  {
      if(passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
    console.table(this.passengers);
  }
}
