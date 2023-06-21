import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurDemandeConsoPageRoutingModule } from './vendeur-demande-conso-routing.module';

import { VendeurDemandeConsoPage } from './vendeur-demande-conso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurDemandeConsoPageRoutingModule
  ],
  declarations: [VendeurDemandeConsoPage]
})
export class VendeurDemandeConsoPageModule {}
