import { AddCategorie, Categorie } from 'src/app/MOdeles/Categorie.model';
import { Status } from '../../MOdeles/Status.modele';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { StoresService } from 'src/app/Services/stores.service';
import { User } from 'src/app/MOdeles/User.model';
import { Store } from 'src/app/MOdeles/Stores.model'

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  constructor(private http: HttpClient, private storesService: StoresService, private formBuilder: FormBuilder) { }

  addCategorie: AddCategorie = {
    nameCategorie: '',
    isActive: false,
    parentId: null
  }
  active: boolean = false
  statuses: Status[] = []
  categories: Categorie[] = []
  user1: User[] = []
  store: Store = {
    name: '',
    logo: '',
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
    street: '',
    statusId: ''
  };


  connectionForm: any

  connectionForm2: any;
  ngOnInit() {



    this.http.get<Status[]>('https://localhost:7169' + '/api/Status').subscribe({
      next: res => {
        this.statuses = res;
        // console.log(JSON.stringify(this.statuses));
      },
      error: error => { }
    })
    this.http.get<Categorie[]>('https://localhost:7169' + '/api/Categorie').subscribe({

      next: res => {
        this.categories = res;
      },
      error: error => { }
    })

    this.http.get<User>('https://localhost:7169' + '/api/Users' + '/2269b7b9-5e3e-4e20-7614-08dc728bd60e').subscribe({

      next: res => {
        this.user1[0] = res;
        const inde = this.user1.length
        this.store.userId = this.user1[0].userId
        console.log("res")
        console.log(this.user1)
      },
      error: error => { }
    })
    this.connectionForm = this.formBuilder.group({
      nameStore: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      secondTelephone: [''],
      isConfirmSms: [false],
      isConfirmEmail: [false],
      city: ['', Validators.required],
      houseNumber: [''],
      familyDoor: [''],
      floor: [''],
      entrance: [''],
      street: [''],
      selectCategorie:[{},[Validators.required]],
      selectStatuse:[{},[Validators.required]]
    });
    console.log(this.connectionForm);

    this.connectionForm2 = this.formBuilder.group({
      name: ['', Validators.required],
      selectCategorie:[{}],
      isActive: [false]
    });
  }
  onSelect( event: any) {

    let statusId =(event.target as HTMLSelectElement).value;

    if (event.target)
      this.store.statusId = statusId;
    // throw new Error('Method not implemented.');
  }
  onSelect2(event: any) {

    console.log("this.selectCategorie")

    let categorieId = (event.target as HTMLSelectElement).value;

    if (event.target)
      this.store.categorieId = categorieId;
    // throw new Error('Method not implemented.');
  }
  onSelectParentCaegorie(event: any) {
    let categorieId = (event.target as HTMLSelectElement).value;
    let ParentCategorie:Categorie
    if (event.target){
    ParentCategorie = <Categorie>this.categories.find(c => c.categorieId ===categorieId);
    this.addCategorie.parentId = categorieId}
     // throw new Error('Method not implemented.');
  }
  onSubmit(): void {
    console.log("onSubmit")
    if (this.connectionForm.valid) {
      // Send POST request to backend API to create connection

      // this.store.categorie = this.selectCategorie;
      this.store.email = this.connectionForm.value.email;
      this.store.telephone = this.connectionForm.value.telephone;
      this.store.isConfirmEmail = this.connectionForm.value.isConfirmEmail;
      this.store.isConfirmSms = this.connectionForm.value.isConfirmSms;
      this.store.secondTelephone = this.connectionForm.value.secondTelephone;
      this.store.name = this.connectionForm.value.nameStore;

      // this.store.status = this.selectStatus
      this.store.createdDate = new Date
      this.store.city = this.connectionForm.value.city;
      this.store.houseNumber = this.connectionForm.value.houseNumber;
      this.store.familyDoor = this.connectionForm.value.familyDoor;
      this.store.floor = this.connectionForm.value.floor;
      this.store.entrance = this.connectionForm.value.entrance;
      this.store.street = this.connectionForm.value.street;
      this.store.entrance = this.connectionForm.value.entrance;
      this.store.entrance = this.connectionForm.value.entrance;

      console.log("this.store")
      console.log(this.store)


      this.http.post<Store>('https://localhost:7169' + '/api/Stores', this.store)
        .subscribe({
          next: response => {
            // Handle success
            console.log('Store created successfully:', response);
            // Optionally, reset the form
            this.connectionForm.reset();
          }, error: error => {
            // Handle error
            console.error('Error creating store:', error);

          }
        });
    } else {
      this.connectionForm.markAllAsTouched();
      console.log("ffffffffff")
      console.log(this.connectionForm.Validators)
    }


    //   this.http.post<any>('https://localhost:7169/api/Status', status).subscribe({
    //     next: response => {
    //         console.log('Status created successfully:', response);
    //     },
    //     error: error => {
    //         console.error('Error creating status:', error);
    //     }
    // });
    //   console.log('this.status'+status)

  }
  onSubmit2():void {
    this.addCategorie.nameCategorie = this.connectionForm2.value.name;
    this.addCategorie.isActive = this.connectionForm.value.isActive;
    console.log(JSON.stringify( this.addCategorie))
 console.log('this.addCategorie'+ this.addCategorie)
    this.http.post<Categorie>('https://localhost:7169' + '/api/Categorie', this.addCategorie)
      .subscribe({
        next: response => {
          // Handle success
          console.log('Categorie created successfully:', response);
          // Optionally, reset the form
          this.connectionForm.reset();
        }, error: error => {
          // Handle error
          console.error('Error creating store:', error);

        }
      });


  }
}

