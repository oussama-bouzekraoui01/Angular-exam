import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../services/produit.service";
import {ActivatedRoute} from "@angular/router";
import {Produit} from "../models/produit";

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit{

  produit ! : Produit;

  constructor(private produitService : ProduitService,
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    let id : number = this.route.snapshot.params['id'];
    this.produitService.getProduitDetail(id).subscribe({
      next : (data : any) => {
        this.produit = data
      }
    })
  }

}
