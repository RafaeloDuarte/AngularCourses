import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { AnimalFormComponent } from './animal-form/animal-form.component'

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    AnimalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
