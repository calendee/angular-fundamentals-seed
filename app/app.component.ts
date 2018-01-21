import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
        
        <button (click)="handleClick()">
          Change Name
        </button>
        <input 
          type="text" 
          [value]="name"
          (blur)="handleBlur($event)"
          (input)="handleInput($event)"
        />
        
        <div>{{ name }}</div>
      </div>
  `
})
export class AppComponent {

  name : string = "Justin";

  constructor() {
  }

  handleClick() {
    this.name = "NOEL!";
  }

  handleBlur(event: any) {
    console.log(event);
    this.name = event.target.value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

}

