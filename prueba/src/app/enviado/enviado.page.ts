import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enviado',
  templateUrl: './enviado.page.html',
  styleUrls: ['./enviado.page.scss'],
})
export class EnviadoPage implements OnInit {
  usuario: string = ''; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
    this.usuario = params['usuario'];
  });
}

}
