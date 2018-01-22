import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean
}

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
          </li>
        </ul>

        <!-- Assign multiple classes at ones -->
        <h3>Airline Passengers</h3>
        {{ passengers.length }}
        <ul>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [ngClass]="{
                'checked-in': passenger.checkedIn,
                'checked-out': !passenger.checkedIn
              }">
            </span>
            {{ i }} {{ passenger.fullName }}
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
      checkedIn: true
    },
    {
      id: 2,
      fullName: 'Roses',
      checkedIn: false
    },
    {
      id: 3,
      fullName: 'James',
      checkedIn: true
    },
    {
      id: 4,
      fullName: 'Louise',
      checkedIn: true
    },
  ];
}
