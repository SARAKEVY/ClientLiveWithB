import { Guid } from "guid-typescript";
import { Status } from "./status";
import { User } from "./user";

export class CellPlan {
  cellPlanId:Guid|undefined;
  name:string|undefined;
  isActive:boolean|undefined;
  description?:string;
  price:number|undefined;
  status:Status|undefined;
  users:Array<User>|undefined;
  limidetTime:Date|undefined;
  location:Location|undefined;
}

