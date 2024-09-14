import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class homePage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  home() {
    if (this.username && this.password) {
      this.router.navigate(['/enviado'], { queryParams: { username: this.username } });
    } else {
      alert('Por favor ingrese usuario y contraseña');
    }
  }
}

