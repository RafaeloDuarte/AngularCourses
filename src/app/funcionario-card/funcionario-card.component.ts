import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

    @Input() animal : any

    getClassesCss(){
      return ['badge','badge-default'];
    }

    getEstilosCartao(){
      return  { 
        'border-width.px' : this.animal.id,  
        backgroundColor : this.animal.id % 2 ===0 ? "lightgreen" : "lightblue" 
      } 
    }

}
