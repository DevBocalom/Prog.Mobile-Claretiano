import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
  standalone: false,
})
export class BebidasPage implements OnInit {

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
  bebidas = [
  {
    titulo: 'Refrigerante Lata',
    subtitulo: '350ml – Coca-Cola, Guaraná, Fanta e outros',
    img: 'assets/img/refri-lata.jpeg',
    altimg: 'Imagem de refrigerantes em lata',
    preco:'R$ 7,00'
  },
  {
    titulo: 'Suco Natural',
    subtitulo: 'Laranja, abacaxi, limão e outras frutas da estação',
    img: 'assets/img/suco.jpeg',
    altimg: 'Imagem de um suco natural',
    preco:'R$ 8,00'
  },
  {
    titulo: 'Água Mineral',
    subtitulo: 'Com ou sem gás – 500ml',
    img: 'assets/img/agua.jpg',
    altimg: 'Imagem de uma garrafa de água mineral',
    preco:'R$ 5,00'
  },
  {
    titulo: 'Cerveja Long Neck',
    subtitulo: 'Diversas marcas disponíveis, 330ml',
    img: 'assets/img/cervejas.jpg',
    altimg: 'Imagem de cerveja long neck',
    preco:'R$ 6,50'
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
  ngOnInit() {  
  }

}
