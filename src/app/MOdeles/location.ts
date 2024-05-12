import { Guid } from "guid-typescript";
import { Status } from "./status";
import { CellPlan } from "./cell-plan";

export class Location {
  locationId:Guid|undefined;
  name?:string;
  isActive:boolean|undefined;
  status?:Status;
  description?:string;
  timeZoneId?:number|undefined;
  startDate?:Date;
  importance:number|undefined;
  cellPlans?:Array<CellPlan>;

}
