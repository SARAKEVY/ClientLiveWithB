import { Guid } from "guid-typescript";
import { Categorie } from "./categorie";
import { Status } from "./status";

export class Product {
  productId:Guid|undefined;
  name:string|undefined;
  Price?:number;
  count?:number;
  isActive?:number;
  img?:string;
  categorie:Categorie|undefined;
  status:Status|undefined;
}
