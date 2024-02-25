import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonService } from '../service/json.service';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrl: './cerca.component.css'
})



export class CercaComponent {

  formRicerca: FormGroup


  ngOnInit() {
    this.formRicerca = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.min(1)])
    })
  }

  constructor (public jsonService : JsonService) {}

  getJsonById() {
    this.jsonService.getJsonById(this.formRicerca.get('id').value).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
