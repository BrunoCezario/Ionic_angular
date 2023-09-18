import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  async recado() {
    const alert = await this.alertController.create({
      header: 'INSS INFORMA',
      subHeader: 'Mensagem Importante',
      message: 'Cadastro efetuado',
      buttons: ['OK','cancelar'],
    });

    await alert.present();
  }

}
