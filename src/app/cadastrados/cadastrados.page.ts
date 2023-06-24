import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrados',
  templateUrl: './cadastrados.page.html',
  styleUrls: ['./cadastrados.page.scss'],
})
export class CadastradosPage implements OnInit {

  constructor(
    public nav: NavController) { }

  ngOnInit() {
  }

  async voltar() {
   
            localStorage.clear();
            this.nav.navigateRoot('/');
        };
}