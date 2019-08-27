import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-prjct';
  animals = []

  aoAdicionar(animal){
    this.animals.push(animal)
  }

}
