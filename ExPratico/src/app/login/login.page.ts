import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  irParaHome() {
    this.router.navigate(['/home']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }
  irParaClientes() {
    this.router.navigate(['/clientes']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }
  irParaProdutos() {
    this.router.navigate(['/produtos']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }
}
