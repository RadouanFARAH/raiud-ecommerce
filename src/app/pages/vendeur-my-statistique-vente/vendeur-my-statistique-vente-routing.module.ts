import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurMyStatistiqueVentePage } from './vendeur-my-statistique-vente.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurMyStatistiqueVentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurMyStatistiqueVentePageRoutingModule {}
