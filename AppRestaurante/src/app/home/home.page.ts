import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    private router: Router,
  ) { }
  itens = [
    { nome: 'Home', url: '/home', icone: 'home' },
    { nome: 'Refeições', url: '/refeicoes', icone: 'restaurant' },
    { nome: 'Bebidas', url: '/bebidas', icone: 'wine' },
    { nome: 'Lanches', url: '/lanches', icone: 'fast-food' },
    { nome: 'Complementos', url: '/complementos', icone: 'add-circle' },
  ];
  promocoes = [
  {
    titulo: '15% OFF',
    subtitulo: 'Em todos os lanches da linha premium',
    img: 'assets/img/15off.jpg',
    altimg: 'Promoção 15% off em lanches premium'
  },
  {
    titulo: 'Combo Família',
    subtitulo: 'Leve 4 e pague 3 em pratos selecionados',
    img: 'assets/img/familia.jpg',
    altimg: 'Imagem de promoção de combo família'
  },
  {
    titulo: 'Bebida Grátis',
    subtitulo: 'Na compra de qualquer prato principal',
    img: 'assets/img/bebidagratis.jpg',
    altimg: 'Imagem de bebida grátis na promoção'
  },
  {
    titulo: 'Quarta do X-Bacon',
    subtitulo: 'X-Bacon com 20% de desconto toda quarta-feira',
    img: 'assets/img/quarta.jpg',
    altimg: 'Imagem de promoção do X-Bacon'
  }
];


  irParaPagina(url: string) {
    this.router.navigate([url]);
  }
  ionViewDidLeave() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

}