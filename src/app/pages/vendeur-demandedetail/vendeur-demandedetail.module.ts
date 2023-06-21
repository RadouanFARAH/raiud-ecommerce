import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurDemandedetailPageRoutingModule } from './vendeur-demandedetail-routing.module';

import { VendeurDemandedetailPage } from './vendeur-demandedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurDemandedetailPageRoutingModule
  ],
  declarations: [VendeurDemandedetailPage]
})
export class VendeurDemandedetailPageModule {}
