import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refeicoes',
  templateUrl: './refeicoes.page.html',
  styleUrls: ['./refeicoes.page.scss'],
  standalone: false,
})
export class RefeicoesPage implements OnInit {

  constructor(private router: Router,
  ) { }
  itens = [
    { nome: 'Home', url: '/home', icone: 'home' },
    { nome: 'Refeições', url: '/refeicoes', icone: 'restaurant' },
    { nome: 'Bebidas', url: '/bebidas', icone: 'wine' },
    { nome: 'Lanches', url: '/lanches', icone: 'fast-food' },
    { nome: 'Complementos', url: '/complementos', icone: 'add-circle' },
  ];
  comidas = [
  {
    titulo: 'Parmegiana de Frango',
    subtitulo: 'Acompanha arroz branco e fritas',
    img: 'assets/img/parmegiana-frango.jpg',
    altimg: 'Imagem de uma parmegiana de frango',
    preco:'R$ 29,90'
  },
  {
    titulo: 'Filé à Oswaldo Aranha',
    subtitulo: 'Filé mignon com alho frito, arroz e batatas portuguesas',
    img: 'assets/img/file-oswaldo.jpg',
    altimg: 'Imagem de um filé à Oswaldo Aranha',
    preco:'R$ 39,90'
  },
  {
    titulo: 'Estrogonofe de Carne',
    subtitulo: 'Acompanha arroz branco e batata palha',
    img: 'assets/img/estrogonofe-carne.jpg',
    altimg: 'Imagem de estrogonofe de carne',
    preco:'R$ 27,50'
  },
  {
    titulo: 'Lasanha à Bolonhesa',
    subtitulo: 'Massa fresca com molho de carne e queijo gratinado',
    img: 'assets/img/lasanha.jpg',
    altimg: 'Imagem de uma lasanha à bolonhesa',
    preco:'R$ 24,90'
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
