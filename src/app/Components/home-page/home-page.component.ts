import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from 'src/app/MOdeles/Stores.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  store:Store={
    name: '',
    logo: '',
    statusId: '',
    description: '',
    userId: '',
    categorieId: '',
    createdDate: new Date(),
    isShipping: false,
    status: {
      statusId: '',
      type: '',
      cellPlans: [],
      locations: [],
      products: [],
      stores: [],
      users: []
    },
    user: {
      userId: '',
      firstName: '',
      lastName: '',
      createdDate: new Date(),
      email: '',
      telephon: '',
      isActive: false,
      statusId: '',
      status: {
        statusId: '',
        type: '',
        cellPlans: [],
        locations: [],
        products: [],
        stores: [],
        users: []
      },
      cellPlanId: '',
      isConfirmSms: false,
      isConfirmEmail: false,
      password: ''
    },
    categorie: {
      categorieId: '',
      nameCategorie: '',
      isActive: false
    },

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
  createStore() {
   console.log( this.store )
  }
}
