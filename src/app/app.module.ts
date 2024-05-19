import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresComponent } from './Components/stores/stores.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Authentication/login/login.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { UserPipe } from './pipes/user.pipe'
import { AddStoreComponent } from './Components/add-store/add-store.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import { JwtInterceptor } from './Authentication/jwt.intercaptor';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    LoginComponent,
    UserPipe,
    HomePageComponent,
    AddStoreComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
