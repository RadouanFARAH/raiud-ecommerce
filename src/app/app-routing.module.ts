import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'consommateur-demandehistorique',
    loadChildren: () => import('./pages/consommateur-demandehistorique/consommateur-demandehistorique.module').then( m => m.ConsommateurDemandehistoriquePageModule)
  },
  {
    path: 'consommateur-points',
    loadChildren: () => import('./pages/consommateur-points/consommateur-points.module').then( m => m.ConsommateurPointsPageModule)
  },
  {
    path: 'directeur-home',
    loadChildren: () => import('./pages/directeur-home/directeur-home.module').then( m => m.DirecteurHomePageModule)
  },
  {
    path: 'logaccount',
    loadChildren: () => import('./pages/logaccount/logaccount.module').then( m => m.LogaccountPageModule)
  },
  {
    path: 'logcity',
    loadChildren: () => import('./pages/logcity/logcity.module').then( m => m.LogcityPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logregister',
    loadChildren: () => import('./pages/logregister/logregister.module').then( m => m.LogregisterPageModule)
  },
  {
    path: 'my-cart',
    loadChildren: () => import('./pages/my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'responsable-home',
    loadChildren: () => import('./pages/responsable-home/responsable-home.module').then( m => m.ResponsableHomePageModule)
  },
  {
    path: 'responsable-my-vend',
    loadChildren: () => import('./pages/responsable-my-vend/responsable-my-vend.module').then( m => m.ResponsableMyVendPageModule)
  },
  {
    path: 'responsable-settings',
    loadChildren: () => import('./pages/responsable-settings/responsable-settings.module').then( m => m.ResponsableSettingsPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./pages/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'vendeur-addproduct',
    loadChildren: () => import('./pages/vendeur-addproduct/vendeur-addproduct.module').then( m => m.VendeurAddproductPageModule)
  },
  {
    path: 'vendeur-demande-conso',
    loadChildren: () => import('./pages/vendeur-demande-conso/vendeur-demande-conso.module').then( m => m.VendeurDemandeConsoPageModule)
  },
  {
    path: 'vendeur-demandedetail',
    loadChildren: () => import('./pages/vendeur-demandedetail/vendeur-demandedetail.module').then( m => m.VendeurDemandedetailPageModule)
  },
  {
    path: 'vendeur-demandehistorique',
    loadChildren: () => import('./pages/vendeur-demandehistorique/vendeur-demandehistorique.module').then( m => m.VendeurDemandehistoriquePageModule)
  },
  {
    path: 'vendeur-home',
    loadChildren: () => import('./pages/vendeur-home/vendeur-home.module').then( m => m.VendeurHomePageModule)
  },
  {
    path: 'vendeur-my-conso',
    loadChildren: () => import('./pages/vendeur-my-conso/vendeur-my-conso.module').then( m => m.VendeurMyConsoPageModule)
  },
  {
    path: 'vendeur-my-product',
    loadChildren: () => import('./pages/vendeur-my-product/vendeur-my-product.module').then( m => m.VendeurMyProductPageModule)
  },
  {
    path: 'vendeur-my-statistique-vente',
    loadChildren: () => import('./pages/vendeur-my-statistique-vente/vendeur-my-statistique-vente.module').then( m => m.VendeurMyStatistiqueVentePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./modals/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'rejets',
    loadChildren: () => import('./modals/rejets/rejets.module').then( m => m.RejetsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
