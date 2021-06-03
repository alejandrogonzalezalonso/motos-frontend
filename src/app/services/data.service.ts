import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  motos:Moto [];

  constructor() { }

  async getMotos(){
    //const respuesta = await fetch("http://motos.puigverd.org/motos");
    const respuesta = await fetch("http://alejandro-gonzalez-7e3.alwaysdata.net/miapi/getMotos");
    this.motos = await respuesta.json();
    console.log(this.motos);
    console.log("hola");
    
    return this.motos;
    
  }  

  async filtro(marca: string){
    const respuesta = await fetch(`http://alejandro-gonzalez-7e3.alwaysdata.net/miapi/getMotos?marca=${marca}`);
    this.motos = await respuesta.json();
    console.log(this.motos);
    return this.motos;
  }
  async delete(id: number){
    const respuesta = `http://alejandro-gonzalez-7e3.alwaysdata.net/miapi/delete/${id}`;
    fetch (respuesta,{
      "method" : "DELETE",
    }).then(response => (console.log(response)))
  }
}

export class Moto{
  id: number;
  marca: string;
  modelo: string;
  year: string;
  foto: string;
  precio: string;
}




