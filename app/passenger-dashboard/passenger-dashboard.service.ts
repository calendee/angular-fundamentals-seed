import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Passenger } from "./models/passenger.interface";

@Injectable()
export class PassengerDashboardService {

  constructor(private http: Http) {}

  getPassengers(): Passenger[] {
    return [
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
}
