import { Guid } from "guid-typescript";
import { CellPlan } from "./cell-plan";
import { Product } from "./product";
import { Store } from "./store";
import { User } from "./user";
import{Location} from "./location"
export class Status {
  statusId:Guid|undefined;
  type:string|undefined;
  cellPlans:Array<CellPlan>|undefined;
  location?:Array<Location>;
  product?:Array<Product>;
  store?:Array<Store>;
  user?:Array<User>;
}

