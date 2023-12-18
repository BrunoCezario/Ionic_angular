import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public paises = [
  'Amsterdam',
  'Buenos Aires',
  'Cairo',
  'Geneva',
  'Hong Kong',
  'Istanbul',
  'London',
  'Madrid',
  'New York',
  'Panama City',
  'Brasil'
];

//public results = [...this.paises];
public results:any;
handleInput(event:any){

 const query = event.target.value.toLowerCase();
 this.results = this.paises.filter((d) => d.toLocaleLowerCase().indexOf(query) > -1);
}

constructor() {
}

}
