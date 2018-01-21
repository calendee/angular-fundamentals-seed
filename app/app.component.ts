import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
        
        <button (click)="handleClick(username.value)">
          Get Value
        </button>
        
        <!--<input -->
          <!--type="text" -->
          <!--[value]="name"-->
          <!--(blur)="handleBlur($event)"-->
          <!--(input)="handleInput($event)"-->
        <!--/>-->
        
        <div>{{ name }}</div>

        <!--<input-->
          <!--type="text"-->
          <!--[ngModel]="name"-->
          <!--(ngModelChange)="handleChange($event)"-->
        <!--/>-->

        <!--<input-->
          <!--type="text"-->
          <!--[(ngModel)]="name"-->
        <!--/>-->
        
        <input
          type="text"
          #username
        />

      </div>
  `
})
export class AppComponent {

  name : string = "Justin";

  constructor() {
  }

  handleClick(value: string) {
    console.log('Name = ', value);
  }


  // handleClick() {
  //   this.name = "NOEL!";
  // }

  // handleBlur(event: any) {
  //   console.log(event);
  //   this.name = event.target.value;
  // }

  // handleInput(event: any) {
  //   this.name = event.target.value;
  // }

  // handleChange(value: string) {
  //   this.name = value;
  // }

}

