
import { Guid } from "guid-typescript";
import { Address } from "./address";
import { Store } from "./store";

export class Conection {
  conectionId:Guid|undefined;
  email?:string;
  telephone?:string;
  secondTelephone?:string;
  isConfirmSms:boolean|undefined;
  isConfirmEmail:boolean|undefined;
  address:Address|undefined
  store:Store|undefined;
}
