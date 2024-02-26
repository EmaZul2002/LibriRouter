import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonService } from '../service/json.service';
import { Libro } from '../domain/Libro';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent {

  formRicerca: FormGroup;
  libriCercati: Libro[];
  storicoRicerche: Libro[][] = []; // Array per memorizzare lo storico delle ricerche

  constructor(public jsonService: JsonService) {}

  ngOnInit() {
    this.formRicerca = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  getJsonById() {
    const id = this.formRicerca.get('id').value;
    this.jsonService.getJsonById(id).subscribe(
      data => {
        console.log(data);
        this.libriCercati = [data]; // Assegna i nuovi risultati alla variabile libriCercati
        this.aggiungiAlloStorico(this.libriCercati); // Aggiungi i nuovi risultati allo storico delle ricerche
      }
    );
  }

  aggiungiAlloStorico(libri: Libro[]) {
    this.storicoRicerche.push(libri); // Aggiungi i libri allo storico delle ricerche
  }
}
