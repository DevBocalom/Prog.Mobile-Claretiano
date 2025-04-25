import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  nomeUser = '';
  login = '';
  senha = '';

  constructor(private dadoUsers: UserService, 
              private router: Router) { }

  ngOnInit() {

  }
  
  irParaHome() {
    this.router.navigate(['/home']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }
  irParaProdutos() {
    this.router.navigate(['/produtos']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }
  irParaClientes() {
    this.router.navigate(['/clientes']); // Certifique-se de que essa rota existe no app-routing.module.ts
  }

  entrar(login: string, senha: string) {
    console.log("-----> " + login + " - " + senha);
    if (this.dadoUsers.getEmail() == login && this.dadoUsers.getSenha() == senha) {
      this.nomeUser = "Bem-vindo(a) " + this.dadoUsers.getNome();
    } else {
      this.nomeUser = "Login ou senha invalidos!"
    }
    this.login = '';
    this.senha = '';
  }
}

