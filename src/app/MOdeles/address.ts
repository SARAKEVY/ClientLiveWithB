import { Conection } from "./conection";
import { Guid } from "guid-typescript";
export class Address {
 addressId:Guid | undefined;
 city:string | undefined;
 houseNumber?:string;
 familyDoor?:string;
 floor?:string;
 entrance?:string;
 street?:string;
 conection:Conection | undefined;
}
