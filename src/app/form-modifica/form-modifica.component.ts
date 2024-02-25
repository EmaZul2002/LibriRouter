import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonService } from '../service/json.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Libro } from '../domain/Libro';

@Component({
  selector: 'app-form-modifica',
  templateUrl: './form-modifica.component.html',
  styleUrl: './form-modifica.component.css'
})
export class FormModificaComponent {
  formModifica : FormGroup

  constructor(public jsonService : JsonService, public route : ActivatedRoute, public router : Router) {}

  ngOnInit() {
    this.formModifica = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.min(1)]),
      titolo: new FormControl('', [Validators.required]),
      autore: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required])
    })
    this.updateJsonById()
  }

  updateJsonById() {
    this.jsonService.getJsonById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.formModifica.get('id').setValue(data.id)
        this.formModifica.get('titolo').setValue(data.titolo)
        this.formModifica.get('autore').setValue(data.autore)
        this.formModifica.get('tipo').setValue(data.tipo)
      }
    )
  }

  confermaModifiche() {
    let libro : Libro = {
      id : this.formModifica.get('id').value,
      titolo : this.formModifica.get('titolo').value,
      autore : this.formModifica.get('autore').value,
      tipo : this.formModifica.get('tipo').value
    }
    this.jsonService.postJson(libro).subscribe(
      data => {
        alert("Libro modificato")
        this.router.navigate(["/Elenco"])
      }
    )
  }

}
