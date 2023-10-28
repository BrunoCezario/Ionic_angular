import { AlertController, NavController } from '@ionic/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(
  private alertController: AlertController,
  private navCtrl:NavController) {}

verificaLogin(login:any, senha:any){
  if (login=="bruno" && senha=="1234") {
    this.paginaConsultaCep();
  }else{
    this.presentAlert();
  }
}

paginaConsultaCep(){
this.navCtrl.navigateForward('inicial');

}
async presentAlert(){
const alert= await this.alertController.create({
  message:'Usuário Inválido',
  buttons:['OK']
});

await alert.present();
}

}
