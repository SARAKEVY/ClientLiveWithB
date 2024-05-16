import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './Components/stores/stores.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AddStoreComponent } from './Components/add-store/add-store.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'stores',
    component: StoresComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'add-store',
    component: AddStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
