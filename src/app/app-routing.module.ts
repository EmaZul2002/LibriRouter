import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ElencoComponent } from './elenco/elenco.component';
import { CercaComponent } from './cerca/cerca.component';
import { FormModificaComponent } from './form-modifica/form-modifica.component';

const routes: Routes = [
  {path: '', redirectTo:"Elenco",pathMatch:'full'},
  {path:'Cerca', component:CercaComponent},
  {path: 'Aggiunta', component:FormComponent },
  {path: 'Elenco', component:ElencoComponent },
  {path: 'Modifica/:id', component:FormModificaComponent}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
