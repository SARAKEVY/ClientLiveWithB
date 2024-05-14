import { Guid } from "guid-typescript";
import { CellPlan } from "../MOdeles/cell-plan";
import { Store } from "../MOdeles/Stores.model";
import { Status } from "../MOdeles/status";

// export interface IUser{
// UserId:Guid|undefined,
//   firstName:string,
//    lastName: string,
//     CreatedDate:Date
//   email:string,
//   telephon:string,
//   isActive:boolean,

//    statusId:string,
//   Status: {},
//    cellPlanId:string,
//   cellPlan:{},
//   stores?:[],
//   isConfirmSms:boolean,
//   isConfirmEmail:boolean,
// }
export class User{
  userId:Guid|undefined;
  firstName:string|undefined;
  lastName:string|undefined;
  createdDate:Date|undefined;
  email:string|undefined;
  telephon?:string;
  isActive:boolean|undefined;
  status:Status|undefined;
  cellPlan:CellPlan|undefined;
  stores?:Array<Store>;
  isConfirmSms:boolean|undefined;
  isConfirmEmail:boolean|undefined;

  }
