import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  isCollapse = true;

    toggleState(): void {
        let foo = this.isCollapse;
        this.isCollapse = foo === false ? true : false; 
    }
  constructor() { }

  ngOnInit(): void {
  }

}
