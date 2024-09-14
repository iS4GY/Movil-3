import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      // Navegar a la página de 'enviado'
      this.router.navigate(['/enviado']);
    } else {
      alert('Por favor, ingresa tu nombre de usuario y contraseña.');
    }
  }
}
