import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{detail | json}}
      <div>
        Passenger name:
        <input 
          type="text" 
          name="fullname"
          [ngModel]="detail?.fullname"/>
      </div>
      
      <div>
        Passenger ID:
        <input 
          type="number"
          name="id"
          [ngModel]="detail?.id"
        />
      </div>
      
      <div>
        <label for="checkedIn">
          <input 
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)"
          /> Checked In
        </label>
        
        <div *ngIf="form.value.checkedIn">
          <input
            type="text"
            name="checkInDate"
            [ngModel]="detail?.checkInDate"/>
        </div>
      </div>
      {{form.value | json}}
    </form>
  `
})
export class PassengerFormComponent {

  @Input()
  detail: Passenger;

  constructor() {}

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
