import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurMyProductPageRoutingModule } from './vendeur-my-product-routing.module';

import { VendeurMyProductPage } from './vendeur-my-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurMyProductPageRoutingModule
  ],
  declarations: [VendeurMyProductPage]
})
export class VendeurMyProductPageModule {}
