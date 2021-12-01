import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistarPersonaService {

  redirectUrl!: string;
  baseUrl:string = "http://localhost/FormSelePHP/Registrar.php";

  constructor(private http: HttpClient) { }

  AddPerson(Person: any){
    return this.http.post<any>(this.baseUrl,JSON.stringify(Person))
    .pipe(share());
  }
}
