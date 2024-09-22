import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.page.html',
  styleUrls: ['./cambiarclave.page.scss'],
})
export class CambiarclavePage implements OnInit {

  claveActual: string = "";
  nuevaClave: string = "";
  confirmarClave: string = "";

  claveTemporal: string = "MiClav3";

  constructor(private alertController: AlertController) { }

  async onSubmit() {
    if (this.claveActual !== this.claveTemporal){
      this.mostrarMensaje("La clave actual es incorrecta");
      return;
    }

    if (this.nuevaClave !== this.confirmarClave){
      this.mostrarMensaje("Escriba la misma clave en confirmación");
      return;
    }

    this.claveTemporal = this.nuevaClave;

    this.mostrarMensaje("Clave cambiada correctamente")
  }

  async mostrarMensaje(mensaje: string) {
    const alert = await this.alertController.create({
      message: mensaje,
      buttons: ["Ok"]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
