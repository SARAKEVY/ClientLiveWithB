import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresComponent } from './Components/stores/stores.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Authentication/login/login.component';
import { UserPipe } from './pipes/user.pipe'
import { AddStoreComponent } from './Components/add-store/add-store.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    LoginComponent,
    UserPipe,
    AddStoreComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
