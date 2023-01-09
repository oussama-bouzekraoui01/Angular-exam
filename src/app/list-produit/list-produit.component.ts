import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../services/produit.service";
import {Produit} from "../models/produit";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit{

  searchFormGroup! : FormGroup;

  produits !: Array<Produit>;

  constructor(private produitService: ProduitService, private fb: FormBuilder) {

  }

  ngOnInit(): void {

    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control(null)
    })

    this.produitService.getAll().subscribe({
      next : (data) => {
        this.produits = data.products;
        console.log(this.produits)
      },
      error : err => console.log(err)
    })




  }

  handleSearchProduit() {
    let keyword = this.searchFormGroup.value.keyword;
    this.produitService.getSearched(keyword).subscribe({
      next : (data) => {
        this.produits = data.products;
      }
    })
  }
}
