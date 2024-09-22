import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nombreUsuario = "Usuario1";

  constructor(private animationCtrl: AnimationController, private router:Router) {}

  ngOnInit() {
    this.animateItems();
  }

  animateItems() {
    const items = document.querySelectorAll('ion-item');

    items.forEach((item, index) => {
      const animation = this.animationCtrl
        .create()
        .addElement(item)
        .duration(750)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
        .delay(index * 100);

      animation.play();
    });
  }

  cerrarSesion() {
    this.router.navigate(['/login'])
  }
}
