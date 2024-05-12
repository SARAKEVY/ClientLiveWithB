import { Guid } from "guid-typescript";
import { Status } from "./status";
import { CellPlan } from "./cell-plan";
import { Store } from "./store";

export class User {
  constructor(  
  ) {
  this.firstName='';
  this.lastName='';
  this.createdDate=new Date();
  this.email='';
  this.telephon='';
  this.isActive=true;
  this.status=new Status();
  this.cellPlan=new CellPlan();
  this.stores=new Array<Store>();
  this.isConfirmSms=false;
  this.isConfirmEmail=true;
  this.userId=Guid.create();
  }
  userId:Guid;
  firstName:string;
  lastName:string;
  createdDate:Date;
  email:string;
  telephon?:string;
  isActive:boolean=true;
  status:Status;
  cellPlan:CellPlan;
  stores?:Array<Store>;
  isConfirmSms:boolean;
  isConfirmEmail:boolean;
  
}
