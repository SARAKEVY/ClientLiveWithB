import { Store } from 'src/app/MOdeles/Stores.model';
import { StoresService } from './../../Services/stores.service';
import { Component,OnInit } from '@angular/core';
import { Categorie } from 'src/app/MOdeles/Categorie.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {

  constructor( private storesService:StoresService) {}

  stores: Store[] = [];
  subStores: Store[] = [];

  categories: Categorie[] = [];
  categorieSelected:Categorie={
    categorieId: '',
    nameCategorie: '',
    isActive: false
  }

  ngOnInit():void {
    this.storesService.getAllStores().subscribe(s => { this.stores = s, console.log(s) });
    console.log("ssssssssss")
    this.storesService.getAllCategories().subscribe(s => { this.categories = s, console.log(s) });


  }
  onClick(categorieId: string) {
    console.log("categorieId   " + categorieId)
    this.subStores = <Store[]><unknown>this.stores.filter(store => store.categorieId === categorieId);
    console.log("this.subStores")
    console.log(this.subStores)


    // throw new Error('Method not implemented.');
    }
}
