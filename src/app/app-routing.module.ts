import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './Components/stores/stores.component';
import { LoginComponent } from './Authentication/login/login.component';

const routes: Routes = [
  {
    path: 'stores',
    component:StoresComponent
  },
  {
    path: '',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
