import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ElencoComponent } from './elenco/elenco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { HttpClientModule } from '@angular/common/http';
import { CercaComponent } from './cerca/cerca.component';
import { FormModificaComponent } from './form-modifica/form-modifica.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ElencoComponent,
    CercaComponent,
    FormModificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
