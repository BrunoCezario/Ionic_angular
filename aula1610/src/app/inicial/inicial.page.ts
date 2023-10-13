 import { HttpClient } from '@angular/common/http';
 import { Component, OnInit } from '@angular/core';
 import { NavController } from '@ionic/angular';
 import { AlertController } from '@ionic/angular';


 @Component({
   selector: 'app-inicial',
   templateUrl: './inicial.page.html',
   styleUrls: ['./inicial.page.scss'],
 })


 export class InicialPage {
  public cep :string = "";
  public localidade :string = "";
  public bairro :string = "";
  public logradouro :string = "";
  public cepTela:string ="";
 cepConculta: any;
  constructor(private cliente:HttpClient,
    private navCtrl:NavController,
    private alertController: AlertController) {}

   ngOnInit() {
  }
consultaCep(cepConsulta:any){
 if (cepConsulta) {
   var r = this.cliente.get("//viacep.com.br/ws/"+ cepConsulta +"/json")
   .subscribe(dados=>this.popularDadosForm(dados));


  }else{
    this.presentAlert();
    }
}


popularDadosForm(dados:any){
  this.logradouro =dados.logradouro;
  this.bairro =dados.bairro;
  this.localidade =dados.localidade;
  this.cep =dados.cep;
}

   paginaLogin(){
    this.navCtrl.navigateForward('home');
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        message: 'Coloque um CEP válido',
        buttons: ['OK'],
      });
      await alert.present();
    }
 }



