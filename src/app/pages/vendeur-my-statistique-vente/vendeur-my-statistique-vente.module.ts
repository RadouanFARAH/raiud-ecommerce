import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurMyStatistiqueVentePageRoutingModule } from './vendeur-my-statistique-vente-routing.module';

import { VendeurMyStatistiqueVentePage } from './vendeur-my-statistique-vente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurMyStatistiqueVentePageRoutingModule
  ],
  declarations: [VendeurMyStatistiqueVentePage]
})
export class VendeurMyStatistiqueVentePageModule {}
