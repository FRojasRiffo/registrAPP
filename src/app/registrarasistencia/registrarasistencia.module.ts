import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarasistenciaPageRoutingModule } from './registrarasistencia-routing.module';

import { RegistrarasistenciaPage } from './registrarasistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarasistenciaPageRoutingModule
  ],
  declarations: [RegistrarasistenciaPage]
})
export class RegistrarasistenciaPageModule {}
