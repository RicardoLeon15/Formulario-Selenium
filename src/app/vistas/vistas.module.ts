import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    ListaPersonasComponent,
    RegistrarPersonaComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class VistasModule { }
