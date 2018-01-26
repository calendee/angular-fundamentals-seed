import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';


@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {

  passenger;
  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {

    this.passengerService
      .getPassenger(1)
      .subscribe((data) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    console.log('Passenger view has : ', event);

    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      })
  }
}
