import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonAlert, IonButton, ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  alertButtons = ['Action'];
  constructor(private toastController: ToastController, private router: Router) {}

  itens = [
    {nome: 'Produtos'},
    {nome: 'Clientes'},
    {nome: 'Usuarios'},
    {nome: 'Categorias'},
    {nome: 'Pedidos'},
    {nome: 'Cargos'},
    {nome: 'Xampsom'}
  ];

  async apresentarToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}



