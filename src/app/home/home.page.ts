import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dados: any = {};

  cachorro = {
    nome: '',
    idade: '',
  }

  public url = 'https://dog.ceo/api/breeds/image/random';
  public imagem = '';
  public result: any = {};
  constructor(
    private http: HttpClient,
    public nav: NavController
  ) { }


  cadastrar() {
    
    this.consultaApi().subscribe(
      (resp) => {
        this.result = resp;
        this.imagem = this.result.message;
      },
      (error) => { }
      );
      this.salvarDados();
      this.nav.navigateForward('cadastrados');

  }

  salvarDados() {
    localStorage.setItem("nome", this.cachorro.nome)
    localStorage.setItem("idade", this.cachorro.idade)
    localStorage.setItem("imagem", this.imagem)
    console.log(this.cachorro);
  }

  ExcluiDados() {
    this.cachorro.nome = '';
    this.cachorro.idade = '';

  }

  consultaApi() {
    return this.http.get(this.url);
  }

}