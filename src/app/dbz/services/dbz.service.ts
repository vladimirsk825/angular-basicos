import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService{
    private _personajes: Personaje[] = [
        {
          nombre: 'goku',
          poder : 15000      
        },
        {
          nombre: 'vegeta',
          poder : 7500
        }
      ];

      get personajes(){
          return [...this._personajes];
      }
    constructor(){
    console.log('Servicio inicializado')
    }

    agregarPersonajes(personaje: Personaje){
        this._personajes.push(personaje);
    }


}