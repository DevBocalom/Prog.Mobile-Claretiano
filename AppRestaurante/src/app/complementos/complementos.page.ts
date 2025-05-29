import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.page.html',
  styleUrls: ['./complementos.page.scss'],
  standalone: false,
})
export class ComplementosPage implements OnInit {

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

complementos = [
  {
    titulo: 'Molho Barbecue',
    subtitulo: 'R$ 2,00',
    img: 'assets/img/barbecue.jpg',
    altimg: 'Imagem de molho barbecue'
  },
  {
    titulo: 'Batata Frita',
    subtitulo: 'R$ 7,50',
    img: 'assets/img/batata-frita.jpeg',
    altimg: 'Imagem de batata frita'
  },
  {
    titulo: 'Queijo Extra',
    subtitulo: 'R$ 3,00',
    img: 'assets/img/queijo-extra.jpeg',
    altimg: 'Imagem de queijo ralado'
  },
  {
    titulo: 'Bacon Crocante',
    subtitulo: 'R$ 3,50',
    img: 'assets/img/bacon-crocante.jpg',
    altimg: 'Imagem de bacon crocante'
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
