import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnviadoPage } from './enviado.page';

const routes: Routes = [
  {
    path: '',
    component: EnviadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviadoPageRoutingModule {}
