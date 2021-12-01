import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './vistas/lista-personas/lista-personas.component';
import { RegistrarPersonaComponent } from './vistas/registrar-persona/registrar-persona.component';

const routes: Routes = [
  {path: 'listapersonas', component: ListaPersonasComponent},
  {path: 'registrarpersona', component: RegistrarPersonaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'listapersonas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
