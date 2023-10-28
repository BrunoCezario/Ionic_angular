import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators  } from '@angular/forms';

//https://www.youtube.com/watch?v=6ElApgMZ9wk
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

public usuario = {
nome:'bruno',
email: 'brunoscezario@souunisuam.com.br',
senha:'123456',
descricao:'exemplo'
};

public fGroup:FormGroup;

constructor(
private fBuilder:FormBuilder) {
this.fGroup = this.fBuilder.group({
  //ensinar sobre a validacao do campos
  //falar sobre p import nas classes modules
  //falar sobre o bind do form group
'nome':['', Validators.compose([
Validators.required,
Validators.minLength(1),
Validators.maxLength(20)

])],
'email':['',Validators.compose([
  Validators.required,
  Validators.pattern(/\S+@\S+\.\S+/)

  ])],
'senha':['',Validators.compose([
  Validators.required,

  ])]

})
 }

 ngOnInit(): void {
  //simulacao de recepção do banco de dados
setTimeout(() => {
  //verifica de o campo nome est nulo
   this.fGroup.get('nome')?.setValue(this.usuario.nome);
  this.fGroup.get('email')?.setValue(this.usuario.email);
  this.fGroup.get('senha')?.setValue(this.usuario.senha);

}, 2000);
}


submitForm(){
  this.fGroup.valid;
console.log(this.fGroup.value)

  }

}
