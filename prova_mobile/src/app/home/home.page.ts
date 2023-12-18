import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators  } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

public usuario = {
email: 'brunoscezario@souunisuam.com.br',
senha:'123456'
};

public fGroup:FormGroup;

constructor(
private navCtrl:NavController,
private fBuilder:FormBuilder) {
this.fGroup = this.fBuilder.group({
'email':['',Validators.compose([
  Validators.required,


  ])],
'senha':['',Validators.compose([
  Validators.required,
  ])]

})
 }

 ngOnInit(): void {
  //simulacao de recepção do banco de dados
// setTimeout(() => {
//   //verifica de o campo nome est nulo
//   this.fGroup.get('email')?.setValue(this.usuario.email);
//   this.fGroup.get('senha')?.setValue(this.usuario.senha);

// }, 2000);
}


submitForm(){
  if(this.fGroup.valid){
    this.navCtrl.navigateForward('inicial');

  };



  }

}
