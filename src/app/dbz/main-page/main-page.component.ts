import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})


export class MainPageComponent {

  // agregar(event: any){
  //   event.preventDefault();
  // }

  
  
  nuevo: Personaje={
    nombre: 'Maestro Roshi',
    poder: 12000
  }

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }
  // agregarNuevoPersonaje(personaje:Personaje){
  //   // this.personajes.push(personaje);
  // }

  constructor(
  ){
  }

}
