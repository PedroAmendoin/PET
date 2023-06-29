import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrados',
  templateUrl: './cadastrados.page.html',
  styleUrls: ['./cadastrados.page.scss'],
})
export class CadastradosPage implements OnInit {

  cachorro = {
    nome: '',
    idade: '',
    imagem: '',
  }

  public imagem = '';


  constructor(
    public nav: NavController
    ) { }

  ngOnInit() {
    this.carregaDados();
  }
  
  IonViewDidEnter(){
    this.carregaDados();
 }
  
  ExcluiDados() {
    this.cachorro.nome =''
    this.cachorro.idade =''
    this.nav.navigateRoot('/');
      }

  async voltar() {
   
            this.nav.navigateRoot('/');
        };

carregaDados(){
  this.cachorro.nome= localStorage.getItem('nome') !;
  this.cachorro.idade= localStorage.getItem('idade') !;
   this.cachorro.imagem= localStorage.getItem('imagem') !;
}

}