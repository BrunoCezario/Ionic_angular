import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators  } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public usuario = {
    nome:'bruno',
    email: 'brunoscezario@souunisuam.com.br',
    senha:'123456',
    };
  public fGroup:FormGroup;

  constructor(
    private navCtrl:NavController,
    private fBuilder:FormBuilder) {
    this.fGroup = this.fBuilder.group({
    'email':['',Validators.compose([
      Validators.required,
      Validators.pattern(/\S+@\S+\.\S+/),
      Validators.maxLength(20)

      ])],
    'senha':['',Validators.compose([
      Validators.required,
      ])],
      'data_nascimento':['',Validators.compose([
        Validators.required,
        ])],
        'qtd_filhos':['',Validators.compose([
          Validators.required,
          ])],
          'nome':['',Validators.compose([
              Validators.required,
              ])],

    })
     }

  ngOnInit() {
  }
  submitForm(){
    this.fGroup.valid;
  console.log(this.fGroup.value)
    }
    paginaLogin(){
      this.navCtrl.navigateForward('home');
    }
}
