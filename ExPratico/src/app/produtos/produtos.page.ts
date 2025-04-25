import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: false,
})
export class ProdutosPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  produtos = [
    {nome: 'Cadeira Gamer', desc: 'Pra você jogar com tranquilidade...', img:'../../assets/img/cadAlpha.jpeg'},
    {nome: 'Cadeira Gamer PISCA PISCA', desc: 'Agora sua cadeira tem luizinha pisca pisca, bora comprar...', img:'../../assets/img/cadRgb.jpg'},
    {nome: 'Super Nintendo', desc: 'Uma RELIQUIA pra você e seu amigo se divertir.', img:'../../assets/img/nintendo.jpg'},
    {nome: 'Playstation 1', desc: 'Um dos pais dos consoles modernos REXPEITA.', img:'../../assets/img/play1.png'},
    {nome: 'Playstation 5 RETRO', desc: 'Tentaram renascer e só fizeram cagada.', img:'../../assets/img/playfalsi.jpeg'},
    {nome: 'Playstation 5', desc: 'Console moderno paga caro e joga nada.', img:'../../assets/img/play.jpeg'},
    {nome: 'PC PEICHAU', desc: 'PC para tudo que você quiser rodar pode compra que é baum.', img:'../../assets/img/pcpeichau.jpg'},
    {nome: 'PC PEICHAU CUSTO BENEFICIO', desc: 'Igual o PC PEICHAU só que pior.', img:'../../assets/img/pcpeichau2.jpeg'},
    {nome: 'Headset Sem fio', desc: 'Nada de ficar se enrolando com o fio no meio da partida.', img:'../../assets/img/headset.jpeg'},
    {nome: 'Headset Console Play5', desc: 'Paga caro no console e agora paga caro no headset também.', img:'../../assets/img/headset2.jpeg'},
    {nome: 'Pé de Pano', desc: 'POCOTO', img:'../../assets/img/cavalo.jpg'},
  ];

  ngOnInit() {
  }

  irParaHome() {
    this.router.navigate(['/home']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }
  irParaLogin() {
    this.router.navigate(['/login']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }
  irParaClientes() {
    this.router.navigate(['/clientes']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }

}
