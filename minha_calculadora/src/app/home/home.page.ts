import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado :string = "";
  constructor() {}

public montarResultado(valor:string){
  this.resultado += valor;
}
public limpar(){
  this.resultado = "";
}
public finalizar(){
this.resultado = eval(this.resultado);
}

}
