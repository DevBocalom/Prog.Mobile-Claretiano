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
