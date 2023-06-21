import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurDemandehistoriquePageRoutingModule } from './vendeur-demandehistorique-routing.module';

import { VendeurDemandehistoriquePage } from './vendeur-demandehistorique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurDemandehistoriquePageRoutingModule
  ],
  declarations: [VendeurDemandehistoriquePage]
})
export class VendeurDemandehistoriquePageModule {}
