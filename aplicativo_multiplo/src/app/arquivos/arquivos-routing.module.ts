import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArquivosPage } from './arquivos.page';

const routes: Routes = [
  {
    path: '',
    component: ArquivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArquivosPageRoutingModule {}
