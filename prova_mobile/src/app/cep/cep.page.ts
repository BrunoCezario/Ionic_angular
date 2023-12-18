import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {
  public cep:string="";
  public localidade:string="";
  public bairro:string="";
  public logradouro:string="";


  constructor(
    private cliente:HttpClient,
    private navCtrl:NavController,
    private alertController: AlertController
  ) {}

   ngOnInit() {
  }


consultaCep(cepConsulta:any){

  if (cepConsulta) {
    var r = this.cliente.get("//viacep.com.br/ws/"+ cepConsulta +"/json")
            .subscribe(d=>this.popularDadosForm(d));
  } else {

  }
}

popularDadosForm(dados:any){
   this.localidade = dados.localidade;
   this.bairro = dados.bairro;
   this.logradouro = dados.logradouro;
   this.cep = dados.cep;
}

async presentAlert(){
  const alert = await this.alertController.create({
    message:'Coloque um CEP Válido',
    buttons:['OK']
  })
  await alert.present();
}
paginaLogin(){
  this.navCtrl.navigateForward('home');
}



}
