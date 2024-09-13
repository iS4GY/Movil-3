import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
 selector: 'app-home',
 templateUrl: './home.page.html',
 styleUrls: ['./home.page.scss'],
})
export class HomePage {
 form: FormGroup;
 constructor(private fb: FormBuilder, private navCtrl: NavController) {
  this.form = this.fb.group({
   usuario: ['']
  });
 }
 goToDetails() {
  const { usuario } = this.form.value;
  this.navCtrl.navigateForward('/details', {
   queryParams: { usuario }
  });
 }
}
