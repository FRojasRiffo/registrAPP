import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombreUsuario: string = "Usuario1";

  constructor(private router:Router) { }

  cerrarSesion() {
    this.router.navigate(['/login'])
  }

}
