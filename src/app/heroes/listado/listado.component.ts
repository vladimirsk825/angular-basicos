import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

    heroes: string []= ['spyderman', 'hulck', 'ironman'];
    heroeBorrado: string = '';

    boorarHeroe(){
      this.heroeBorrado =  this.heroes.shift() || '';
    }

}
