import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
  standalone: false,
})
export class LanchesPage implements OnInit {

  constructor(private router: Router,
  ) { }
  itens = [
    { nome: 'Home', url: '/home', icone: 'home' },
    { nome: 'Refeições', url: '/refeicoes', icone: 'restaurant' },
    { nome: 'Bebidas', url: '/bebidas', icone: 'wine' },
    { nome: 'Lanches', url: '/lanches', icone: 'fast-food' },
    { nome: 'Complementos', url: '/complementos', icone: 'add-circle' },
  ];
  lanches = [
  {
    titulo: 'Cheeseburger',
    subtitulo: 'Pão, hambúrguer 150g, queijo e maionese da casa',
    img: 'assets/img/cheeseburger.jpg',
    altimg: 'Imagem de um cheeseburger',
    preco:'R$ 18,90'
  },
  {
    titulo: 'X-Bacon',
    subtitulo: 'Hambúrguer com queijo, bacon crocante e molho especial',
    img: 'assets/img/x-bacon.jpeg',
    altimg: 'Imagem de um X-Bacon',
    preco:'R$ 22,50'
  },
  {
    titulo: 'Veggie Burger',
    subtitulo: 'Hambúrguer vegetariano com legumes grelhados',
    img: 'assets/img/veggie-burger.jpg',
    altimg: 'Imagem de um veggie burger',
    preco:'R$ 19,90'
  },
  {
    titulo: 'Frango Crispy',
    subtitulo: 'Sanduíche de frango empanado com molho picante',
    img: 'assets/img/frango-crispy.jpeg',
    altimg: 'Imagem de um lanche de frango crispy',
    preco:'R$ 21,00'
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
