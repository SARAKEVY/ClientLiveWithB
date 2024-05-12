import { Status } from "./Status.modele";
import { Store } from "./Stores.model";

export interface User{
 userId: string,
    firstName: string,
    lastName: string,
    createdDate: Date,
    email: string,
    telephon: string,
    isActive: boolean,
  statusId: string,
    // status: Status,
    cellPlanId: string,
    isConfirmSms: boolean,
  isConfirmEmail: boolean,
    password: string
  }
