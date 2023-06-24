import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dados: any = {};

  cachorro = {
    nome: 'pipoca',
    idade: '3',
  };

  constructor(
    public nav: NavController
  ) { }



cadastrar(){
  this.nav.navigateForward('cadastrados');
}

salvarDados(){
  localStorage.setItem("nome", this.cachorro.nome)
  localStorage.setItem("idade", this.cachorro.idade)
}

ExcluiDados(){
  this.cachorro.nome = '';
  this.cachorro.idade = '';
}
}