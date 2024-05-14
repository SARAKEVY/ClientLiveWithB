import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../MOdeles/Stores.model';
import { Observable } from 'rxjs';
import { AddStore } from '../MOdeles/AddStore.model';
import { AddAddress } from '../MOdeles/Address.model';
import { Conection } from '../MOdeles/Conection.model';
import { Categorie } from '../MOdeles/Categorie.model';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  constructor(private htttp: HttpClient) {

  }
  apiUrl='https://localhost:7169'

  getAllStores():Observable<Store[]>{
    return this.htttp.get<Store[]>(this.apiUrl+'/api/Stores')
  }
  getAllCategories():Observable<Categorie[]>{
    return this.htttp.get<Categorie[]>(this.apiUrl+'/api/Categorie')
  }

  AddStore(addStore:AddStore): Observable<AddStore>{
    return this.htttp.post<AddStore>(this.apiUrl+'/api/Store',addStore)
  }
  AddAddress(addAddress:AddAddress): Observable<AddAddress>{
    return this.htttp.post<AddAddress>(this.apiUrl+'/api/Address',addAddress)
  }
  AddConection(addConection:Conection): Observable<Conection>{
    return this.htttp.post<Conection>(this.apiUrl+'/api/Conection',addConection)
  }
}
