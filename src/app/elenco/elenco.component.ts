import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable } from 'rxjs';
import { JsonService } from '../service/json.service';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrl: './elenco.component.css'
})
export class ElencoComponent implements OnInit{
  @Input() elencoLibri : Libro[] = []

  //injection
  constructor(public jsonService : JsonService) {}

  ngOnInit() {
    this.json$ = this.jsonService.getJson()
  }

  json$ : Observable<Libro[]>;

  id : number
  titolo : string
  autore : string
  tipo : string

  delJsonById(id : number) {
    this.jsonService.deleteJsonById(id).subscribe(
      data => {
        alert("Libro con ID " + id + " rimosso")
        this.ngOnInit()
      }
    )
  }
}
