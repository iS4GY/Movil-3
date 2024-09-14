import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enviado',
  templateUrl: './enviado.page.html',
  styleUrls: ['./enviado.page.scss'],
})
export class EnviadoPage implements OnInit {
  username: string = 'Invitado'; // Valor por defecto

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Obtener el nombre de usuario de los queryParams si es necesario
    this.route.queryParams.subscribe(params => {
      this.username = params['user'] || this.username; // Usar el valor por defecto si no hay queryParams
    });
  }

  goToReestablecer() {
    this.router.navigate(['/reestablecer']);
  }
}
