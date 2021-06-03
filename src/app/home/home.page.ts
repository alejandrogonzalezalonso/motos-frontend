import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DataService, Moto } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  motos:Moto [] = [];
  marca: String;

  constructor(private data:DataService, private menu: MenuController, private router: Router) {
    this.getMotos();
  }

  async getMotos(){
    this.motos = await this.data.getMotos();
  }

  async getFilter(marca){
    
    if(marca === "Ducati" ){
      this.motos = await this.data.filtro(marca);
    }else if(marca === "Yamaha"){
      this.motos = await this.data.filtro(marca);
    }else if(marca === "Honda"){
      this.motos = await this.data.filtro(marca);
    }else{
      this.getMotos();
    }
    
  }

  menuLateral() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log("funciona el menu");
  }

  pasoParametro(info){
    let navigationExtras: NavigationExtras = {
      state: {
        parametros: info,
      }
    };
    this.router.navigate(['detalle'], navigationExtras);
    
    
    console.log("Funciona paso parametro");
  }



}
