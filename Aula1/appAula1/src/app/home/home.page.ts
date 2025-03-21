import { Component } from '@angular/core';
import { Router } from '@angular/router'; //importa o Router para navegação
import { IonAlert, IonButton} from '@ionic/angular/standalone';
import { ToastController } from '@ionic/angular/standalone';
//import { UserService } from '../api/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  alertButtons = ['Action'];

  nomeUser = ''
  
  constructor(
    private toastController: ToastController, 
    private router: Router, 
    /*private dadoUsers: UserService*/ ) {}

  itens = [
    {nome: 'Produtos', url: '/produtos'},
    {nome: 'Clientes', url: '/clientes'},
    {nome: 'Usuarios', url: '/usuarios'},
    {nome: 'Categorias', url: '/categorias'},
    {nome: 'Pedidos', url: '/pedidos'},
    {nome: 'Cargos', url: '/cargos'}
  ];

  async apresentarToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  //função para navegar para a página selecionada
  irParaPagina(url: string){
    this.router.navigate([url]);//Navega para URL correspondente
  }

}



