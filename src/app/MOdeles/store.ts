import { Guid } from "guid-typescript";
import { Status } from "./status";
import { User } from "./user";
import { Categorie } from "./categorie";
import { Conection } from "./conection";

export class Store {
  storeId:Guid|undefined;
  name:string|undefined;
  logo?:string;
  status:Status|undefined;
  description?:string;
  user:User|undefined; 
  categories:Categorie|undefined;
  createdDate:Date|undefined;
  isShipping?:boolean;
  conection:Conection|undefined;
}
