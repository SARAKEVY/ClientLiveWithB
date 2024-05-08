import { Store } from 'src/app/MOdeles/Stores.model';
import { StoresService } from './../../Services/stores.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {
  constructor( private storesService:StoresService) {}

  stores: Store[] = [];
  ngOnInit():void {
    this.storesService.getAllStores().subscribe(s => { this.stores = s, console.log(s) });
  }
}
