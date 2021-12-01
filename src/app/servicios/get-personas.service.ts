import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPersonasService {

  redirectUrl!: string;
  baseUrl:string = "http://localhost/FormSelePHP/TablaPersona.php";

  constructor(private http:HttpClient) { }

  getTabla(){
    return this.http.get<any>(this.baseUrl)
    .pipe(share());
  }
}
