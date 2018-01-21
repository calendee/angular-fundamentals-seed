import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
        <h1 [innerHTML]="title"></h1>
        <h1>{{title}}</h1>
        <div>
          {{ numberOne + numberTwo }}
        </div>
        
        <div>
          {{ isHappy ? ':)' : ':('}}
        </div>
        
        <img [src]="logo" />
        
        <input type="text" [value]="name"/>
        <div>My name is {{name}}</div>
      </div>
  `
})
export class AppComponent {

  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  name : string = "Justin";
  logo: string = 'img/logo.svg';

  constructor() {
    this.title = 'Ultimate Angular1';
  }
}
