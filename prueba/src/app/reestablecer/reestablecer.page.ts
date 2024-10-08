import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage {
  username: string = '';

  constructor(private router: Router) {}

  goToLogin() {
    // Navegar a la página de login
    this.router.navigate(['/login']);
  }
}
