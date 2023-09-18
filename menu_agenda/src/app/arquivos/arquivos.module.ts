import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArquivosPageRoutingModule } from './arquivos-routing.module';

import { ArquivosPage } from './arquivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArquivosPageRoutingModule
  ],
  declarations: [ArquivosPage]
})
export class ArquivosPageModule {}
