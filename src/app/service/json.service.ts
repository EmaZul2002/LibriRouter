import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../domain/Libro';

@Injectable({
  providedIn: 'root'
})

export class JsonService {
  url : string = "http://localhost:9999/api/libri"

  constructor(public httpClient : HttpClient) { }

  getJson() : Observable<Libro[]> {
    return this.httpClient.get<Libro[]>(this.url)
  }

  getJsonById(id:number):Observable<Libro> {
    return this.httpClient.get<Libro>(this.url + '/' + id);
  }

  deleteJsonById(id:number) {
    return this.httpClient.delete<Libro>(this.url + '/' + id);
  }

  postJson(json : Libro) : Observable<Libro> {
    return this.httpClient.post<Libro>(this.url, json)
  }
}
