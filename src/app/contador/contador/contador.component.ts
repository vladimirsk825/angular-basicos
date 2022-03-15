import { Component } from "@angular/core";

 
@Component({
    selector: 'app-contador',
    template:`
    <h1>{{titulo}} </h1>
    <button (click)="acumular(base)"> + {{base}} </button>
    <span>{{ numero }}</span>
    <button (click)="acumular(base * -1)"> - {{base}}</button>

    <h3>la bse es: {{base}}</h3>
    
    `
})

export class contadorComponent {

    public titulo : string = 'Contador APP';

  numero: number = 10;

  // sumar(){
  //   this.numero +=1;
  // }
  // restar(){
  //   this.numero -=1;
  // }

  acumular(valor: number){
    this.numero += valor;
  }

  //  base nuember 5:
  public base :number = 5;
}