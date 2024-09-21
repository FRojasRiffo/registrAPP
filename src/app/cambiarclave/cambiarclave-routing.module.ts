import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarclavePage } from './cambiarclave.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarclavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarclavePageRoutingModule {}
