import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { GetPersonasService } from 'src/app/servicios/get-personas.service';

@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css']
})
export class TablaPersonasComponent implements OnInit {

  data: Array<any> | undefined;
  constructor(private getperson:GetPersonasService) { 
    
    this.getperson.getTabla()
    .pipe(first())
    .subscribe(
      data=>{
        this.data=data;
        console.log(this.data);
      }
    );
  }

  ngOnInit(): void {
  }

}
