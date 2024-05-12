import { Guid } from "guid-typescript";
import { Categorie } from "./Categorie.model";
import { Status } from "./Status.modele";
import { User } from "./User.model";

 export interface Store{
          name:string,
         logo:string,
         statusId:string,
      // status:Status
         description:string,
          userId:string,
          categorieId:string,
          //  categorie:Categorie,
          createdDate:Date,
       isShipping:boolean,
       email: string,
       telephone: string,
       secondTelephone: string,
       isConfirmSms: boolean,
   isConfirmEmail: boolean,
   city: string,

   houseNumber: string,
   familyDoor: string,
   floor: string,
   entrance: string,
   street: string
}
