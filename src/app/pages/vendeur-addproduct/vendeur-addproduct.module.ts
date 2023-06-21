import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurAddproductPageRoutingModule } from './vendeur-addproduct-routing.module';

import { VendeurAddproductPage } from './vendeur-addproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurAddproductPageRoutingModule
  ],
  declarations: [VendeurAddproductPage]
})
export class VendeurAddproductPageModule {}
