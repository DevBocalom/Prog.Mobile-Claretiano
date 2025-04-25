import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: false,
})
export class ClientesPage implements OnInit {

  constructor(
    private router: Router,
  ) { }
  clientes = [
    {nome: 'Joaquim Prado',},
    {nome: 'Joana Julesca',},
    {nome: 'Enes Erevaldo',},
    {nome: 'Julio Jeferson',},
    {nome: 'Diego Domingo',},
    {nome: 'Breno Segunda-feira',},
    {nome: 'Carlos Quinta-feira',},
    {nome: 'Bruno Montanha',},
    {nome: 'Adilson Pernas de Alicate',},
    {nome: 'Tulio Mão de Alface',},
    {nome: 'Adalberto Pé de Bosta',},
  ];
  ngOnInit() {
  }

  irParaHome() {
    this.router.navigate(['/home']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }
  irParaLogin() {
    this.router.navigate(['/login']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }
  irParaProdutos() {
    this.router.navigate(['/produtos']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }

}
