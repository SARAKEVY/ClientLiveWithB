import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/MOdeles/Stores.model';
import { ThemeService } from 'src/app/Services/theme.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private themeService:ThemeService) { }  
  store:Store={
    name: '',
    logo: '',
    statusId: '',
    description: '',
    userId: '',
    categorieId: '',
    createdDate: new Date(),
    isShipping: false,
    // status: {
    //   statusId: '',
    //   type: '',

    // },

    // categorie: {
    //   categorieId: '',
    //   nameCategorie: '',
    //   isActive: false
    // },

    email: '',
    telephone: '',
    secondTelephone: '',
    isConfirmSms: false,
    isConfirmEmail: false,
    city: '',
    houseNumber: '',
    familyDoor: '',
    floor: '',
    entrance: '',
    street: ''
  }
  ngOnInit(): void {
    this.themeService.onChangeTheme('light');
  }
  createStore() {
   console.log( this.store )
  }

  onThemeChange(themeName: string) {
    this.themeService.onChangeTheme(themeName);
  }
}
