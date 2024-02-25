import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Libro } from '../domain/Libro';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonService } from '../service/json.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<Libro>()

  id : number = undefined
  titolo : string = ""
  autore : string = ""
  tipo : string = ""

  constructor (public jsonService : JsonService) {}

  formAggiunta : FormGroup

  ngOnInit() {
    this.formAggiunta = new FormGroup({
      titolo : new FormControl('', [Validators.required]),
      autore : new FormControl('', [Validators.required]),
      tipo : new FormControl('', [Validators.required])
    })
  }

  confermaInserimento() {
    let libro : Libro = {
      id : 0,
      titolo : this.formAggiunta.get('titolo').value,
      autore : this.formAggiunta.get('autore').value,
      tipo : this.formAggiunta.get('tipo').value
    }
    
    delete libro.id
    this.jsonService.postJson(libro).subscribe(
      data => {
        this.ngOnInit()
        alert("Libro inserito")
      }
    )
  }
  
}
