import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './Components/stores/stores.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AddStoreComponent } from './Components/add-store/add-store.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { AuthGuard } from './Authentication/auth.guard';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'stores',
    component: StoresComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'add-store',
    component: AddStoreComponent,
    canActivate:[AuthGuard]
  },
  { path: '', component:HomePageComponent, canActivate: [AuthGuard] },
  // { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  // { path: 'account', loadChildren: accountModule },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
