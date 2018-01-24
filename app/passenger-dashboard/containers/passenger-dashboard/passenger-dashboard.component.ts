import { Component, OnInit } from '@angular/core';

import { Passenger} from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      
      <div *ngFor="let passenger of passengers;">
        {{passenger.fullname}}
      </div>
      
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

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {
    // Using a promise instead of a subscribe
    this.passengerService
      .getPassengers()
      .then((data: Passenger[]) => this.passengers = data )
      .catch((error) => {
        console.log('Failed to get passengers: ', error);
      })
  }

  handleRemove(event) {

    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) =>  {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id
        });
      }, (error: any) => {
        console.log('Failed to remove passenger: ', error);
      });
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {

        this.passengers = this.passengers.map((passenger: Passenger) =>  {
          if(passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      }, (error: any) => {
        console.log('Failed to edit passenger :', error);
      });

  }
}
