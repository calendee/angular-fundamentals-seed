import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

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
          minlength="2"
          maxlength="25"
          required
          #fullname="ngModel"
          [ngModel]="detail?.fullname"/>
        
        {{fullname.errors | json}}
        <div *ngIf="fullname.errors?.required && fullname.touched" class="error">
          Passenger name required
        </div>

      </div>
      
      <div>
        Passenger ID:
        <input 
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id"
        />
        
        <div *ngIf="id.errors?.required && id.dirty" class="error">
          Passenger ID is required
        </div>
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
      
      <div>
        Luggage:
        <select 
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{item.value}}
          </option>
        </select>
      </div>
      
      <button
        type="submit"
        [disabled]="form.invalid">
        Update Passenger
      </button>
    </form>
  `
})
export class PassengerFormComponent {

  @Input()
  detail: Passenger;

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No Baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand Baggage'
    },
    {
      key: 'hold-only',
      value: 'Hold Baggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and Hold Baggage'
    }
  ];

  constructor() {}

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
