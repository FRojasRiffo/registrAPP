import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarasistenciaPage } from './registrarasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarasistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarasistenciaPageRoutingModule {}
