import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { TablaPersonasComponent } from './tabla-personas/tabla-personas.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table' 
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    BarraNavegacionComponent,
    TablaPersonasComponent,
    FormPersonaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    BarraNavegacionComponent,
    TablaPersonasComponent,
    FormPersonaComponent
  ]
})
export class ComponentesModule { }
