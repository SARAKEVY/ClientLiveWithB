import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresComponent } from './Components/stores/stores.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Authentication/login/login.component';
import { AddStoreComponent } from './Components/add-store/add-store.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    LoginComponent,
    AddStoreComponent,
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
