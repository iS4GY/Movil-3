import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
selector: 'app-login',
templateUrl: './login.page.html',
styleUrls: ['./login.page.scss'],
})
export class LoginPage {
username: string = '';
password: string = '';
constructor(private authService: AuthService, private router: Router) {}
login() {
if (this.authService.login(this.username, this.password)) {
//aprovechamos de usar state para llevar la informacion al dashboard.
this.router.navigate(['/dashboard'], { state: { username: this.username } });
} else {
alert('Nombre de usuario o contraseña incorrectos');
  }
}
}
