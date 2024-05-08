import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './Components/stores/stores.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AddStoreComponent } from './Components/add-store/add-store.component';

const routes: Routes = [
  {
    path: 'stores',
    component:StoresComponent
  },
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'add-store',
    component:AddStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
