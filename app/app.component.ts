import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate?: number
}
// checkInDate? makes it an optional property

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
        
        <!-- Assign only one class -->
        <h3>Airline Passengers</h3>
        {{ passengers.length }}
        <ul>
          <li *ngFor="let passenger of passengers; let i = index">
            <span 
              class="status"
              [class.checked-in]="passenger.checkedIn">
            </span>
            {{ i }} {{ passenger.fullName }}
            <p>{{ passenger | json }}</p>
            <div class="date">
              Check in date: 
              {{ passenger.checkedIn ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
            </div>
          </li>
        </ul>
      </div>
  `
})
export class AppComponent {

  name : string = '';

  constructor() {
  }

  passengers: Passenger[] = [
    {
      id: 1,
      fullName: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000
    },
    {
      id: 2,
      fullName: 'Roses',
      checkedIn: false,
      checkInDate: null
    },
    {
      id: 3,
      fullName: 'James',
      checkedIn: true,
      checkInDate: 1490742000000
    },
    {
      id: 4,
      fullName: 'Louise',
      checkedIn: true,
      checkInDate: null
    },
  ];
}
