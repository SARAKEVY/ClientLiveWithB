import { Guid } from "guid-typescript";
import { Product } from "./product";
import { Store } from "./store";

export class Categorie {
  categorieId:Guid | undefined;
  nameCategorie:string | undefined;
  parent?:Categorie;
  isActive:boolean|undefined;
  stores?:Array<Store>;
  product?:Product;
  childrens?:Array<Categorie>;
}
