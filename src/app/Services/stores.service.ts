import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../MOdeles/Stores.model';
import { Observable } from 'rxjs';

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
}
