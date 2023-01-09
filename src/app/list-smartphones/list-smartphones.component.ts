import {Component, OnInit} from '@angular/core';
import {Produit} from "../models/produit";
import {ProduitService} from "../services/produit.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-smartphones',
  templateUrl: './list-smartphones.component.html',
  styleUrls: ['./list-smartphones.component.css']
})
export class ListSmartphonesComponent implements OnInit{

  produits !: Array<Produit>;

  constructor(private produitService: ProduitService,
              private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    let categorie : string = this.route.snapshot.params['categorie'];

    this.produitService.getProduits(categorie).subscribe({
      next : (data) => {
        this.produits = data.products;
        console.log(this.produits)
      },
      error : err => console.log(err)
    })
  }


}
