import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { RegistarPersonaService } from 'src/app/servicios/registar-persona.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

  validar:FormGroup;
  submitted = false;
  persona={
    nombre: null,
    paterno: null,
    materno: null,
    telefono: null,
    edad: null
  };

  constructor(private form:FormBuilder,private registrar: RegistarPersonaService) { 
    this.validar = this.form.group({
      nombre:['',Validators.required],
      paterno:['',Validators.required],
      materno:['',Validators.required],
      telefono:['',Validators.required],
      edad:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get f(){
    return this.validar.controls;
  }

  AgregarPersona(){
    this.submitted=true;
    if(this.validar.invalid){
      return;
    }
    this.registrar.AddPerson(this.persona)
    .pipe(first())
    .subscribe(
      data=>{
        if(data){
          Swal.fire({
            icon: 'success',
            title: 'Agregado',
            text: 'La persona ha sido agregada.',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: 'black'
          });
          this.Limpiar();
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'No Agregado',
            text: 'La persona no ha sido agregada.',
            confirmButtonText: 'Aceptar'
          });
        }
      }
    )
  }

  Limpiar(){
    this.submitted=false;
    this.validar.reset();
  }
}
