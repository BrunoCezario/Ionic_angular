import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private _title = 'CURSO DE DIRETIVAS'

  public get title(){

    return this._title;
  }
  constructor() {}
}
