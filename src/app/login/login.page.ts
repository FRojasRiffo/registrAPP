import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  public alertButtons = [{
    text: 'Restablecer contraseña',
    handler: (data: any) => {
      if (data && data.nombreUsuario) {
        this.enviarMensaje(data.nombreUsuario);
      }
    }
  }];

  public alertInputs = [
    {
      name: "nombreUsuario",
      type: "text",
      placeholder: 'Nombre de usuario',
    }
  ];

  nombreUsuario: string = "";
  contrasena: string = "";

  usuarioTemporal: string = "Usuario1";
  claveTemporal: string = "MiClav3";

  constructor(
    private alertController: AlertController, 
    private router: Router
  ) { }

  async onSubmit() {
    if (!this.nombreUsuario && !this.contrasena) {
      await this.mostrarAlerta('Error', 'Por favor, ingrese su nombre de usuario y contraseña.');
      return;
    }

    if (!this.nombreUsuario) {
      await this.mostrarAlerta('Error', 'El campo de nombre de usuario está vacío.');
      return;
    }

    if (!this.contrasena) {
      await this.mostrarAlerta('Error', 'El campo de contraseña está vacío.');
      return;
    }

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
      await this.mostrarAlerta('Error', 'Credenciales no válidas. Por favor, inténtalo de nuevo.');
    }
  }

  async enviarMensaje(nombreUsuario: string) {
    const mensaje = `Se ha enviado un correo para restablecer la contraseña del usuario ${nombreUsuario}.`;
    await this.mostrarMensaje(mensaje);
  }

  async mostrarMensaje(mensaje: string) {
    const alert = await this.alertController.create({
      header: "Correo enviado",
      message: mensaje,
      buttons: ["Ok"]
    });

    await alert.present();
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });

    await alert.present();
  }
}
