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
  public imagem = "";
  public result: any = {};
  constructor(
    private http: HttpClient,
    public nav: NavController
  ) { }


  cadastrar() {
    
      this.salvarDados();
      this.nav.navigateForward('cadastrados');

  }

  avancar(){
 this.nav.navigateForward('cadastrados');
  }

  async salvarDados() {
    localStorage.setItem("nome", this.cachorro.nome)
    localStorage.setItem("idade", this.cachorro.idade)
    localStorage.setItem("imagem", await this.gerar())
    console.log(this.cachorro);
  }


  gerar(){
  return new Promise<string>(async (resolve, reject) => {
    try {
      const resp= await this.consultaApi().toPromise()
      this.result=resp
      resolve(this.result.message)
    } catch (error) {
      reject(error)
    }
  })
  }

  consultaApi() {
    return this.http.get(this.url);
  }

}