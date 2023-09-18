import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

private _titulo = 'CURSO DE IONIC COM ANGULAR';
private _cursos = ['ADS'
,'Ciência de Computação','Redes Computacionais'
,'Engenharia de Dados',
'IA'];

private _professores = ['bruno','silvio','alex','andre','carol'];

public get titulo(){
  return this._titulo;
}

public get cursos(){
  return this._cursos;
}

public get professores(){
  return this._professores;
}
  constructor() {}

}
