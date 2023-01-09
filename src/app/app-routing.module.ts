import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProduitComponent} from "./list-produit/list-produit.component";
import {ProduitDetailComponent} from "./produit-detail/produit-detail.component";
import {ListSmartphonesComponent} from "./list-smartphones/list-smartphones.component";


const routes: Routes = [
  {path : '', component : ListProduitComponent},
  {path : 'produitDetail/:id', component : ProduitDetailComponent},
  {path : ':categorie', component : ListSmartphonesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
