import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'http://localhost:3000/nyhedsbrev';
  guiUrl = 'http://localhost:3000/paragraph';

  opretNyhedsbrev(data:any):Observable<any>
  {
    console.log(data,'createapi==>')
    return this._http.post(`${this.apiUrl}`,data);
  }

  nyhedsbrevModtagere():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }

  sletModtagere(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  opdaterModtagere(data:any,id:any):Observable<any>
  {
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }
  getSingleData(id:any):Observable<any>
{
  let ids = id;
  return this._http.get(`${this.apiUrl}/${ids}`);
}

guiElement(id:any):Observable<any>
{
  let ids = id;
  return this._http.get(`${this.guiUrl}/${ids}`);
}
  
}
