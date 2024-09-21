import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  nombreUsuario: string = "";
  contrasena: string = "";

  usuarioTemporal: string = "Usuario1";
  claveTemporal: string = "MiClav3";

  constructor(
    private alertController: AlertController, 
    private router: Router
  ) { }

  async onSubmit() {
    if (this.nombreUsuario === this.usuarioTemporal && this.contrasena === this.claveTemporal) {
      const alert = await this.alertController.create({
        header: 'Inicio de Sesión Exitoso',
        buttons: [{
          text: 'Ok',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }]
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Credenciales no válidas. Por favor, inténtalo de nuevo.',
        buttons: ['Ok']
      });

      await alert.present();
    }
  }
}
