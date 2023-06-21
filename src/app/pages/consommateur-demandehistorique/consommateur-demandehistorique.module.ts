import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsommateurDemandehistoriquePageRoutingModule } from './consommateur-demandehistorique-routing.module';

import { ConsommateurDemandehistoriquePage } from './consommateur-demandehistorique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsommateurDemandehistoriquePageRoutingModule
  ],
  declarations: [ConsommateurDemandehistoriquePage]
})
export class ConsommateurDemandehistoriquePageModule {}
