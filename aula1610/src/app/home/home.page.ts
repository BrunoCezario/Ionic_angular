import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    //redireciona para pagina
    private navCtrl:NavController,
    private alertController: AlertController
  ) {}

verificaLogin(login:any, senha:any){
if(login=="bruno" && senha=="1234"){
  this.paginaConsultaCep()
  }else{
    this.presentAlert()
  }
}


paginaConsultaCep(){
this.navCtrl.navigateForward('inicial');
}

async presentAlert() {
  const alert = await this.alertController.create({
    message: 'Usuário inválido',
    buttons: ['OK'],
  });
  await alert.present();
}

}
