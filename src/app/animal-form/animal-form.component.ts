import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {

  id=0
  nome = ''
  adicionado = false
  @Output() animalAdicionado = new EventEmitter
  
  mudaNome(evento : any){
      this.nome = evento.target.value;
  }
  adiciona(){
      this.adicionado = true
      const animal = {
          id : ++this.id,
          nome: this.nome
      }
      console.log(this.nome)
      this.animalAdicionado.emit(animal)
  }
  
}
