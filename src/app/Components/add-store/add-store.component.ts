import { Categorie } from 'src/app/MOdeles/Categorie.model';
import { Status } from '../../MOdeles/Status.modele';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StoresService } from 'src/app/Services/stores.service';
import { User } from 'src/app/MOdeles/User.model';
import { Store } from 'src/app/MOdeles/Stores.model'

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  constructor( private http: HttpClient,private storesService:StoresService, private formBuilder: FormBuilder) {}

  active:boolean=false
  statuses: Status[] = []
  categories:Categorie[]=[]
user1:User[]=[]
  store: Store={
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
    statusId:  ''
  };
  selectStatus:Status={
    statusId: '',
    type: '',

  }
  selectCategorie: Categorie={
    categorieId: '',
    nameCategorie: '',
    isActive: false
  };

  connectionForm:any

  ngOnInit() {



    this.http.get<Status[]>('https://localhost:7169' + '/api/Status').subscribe({
      next: res => {
        this.statuses = res;
    // console.log(JSON.stringify(this.statuses));
      },
      error:error=>{}
    })
    this.http.get<Categorie[]>('https://localhost:7169' + '/api/Categorie').subscribe({

    next: res => {
      this.categories = res;
    },
    error:error=>{}
  })

    this.http.get<User>('https://localhost:7169' + '/api/Users'+'/2269b7b9-5e3e-4e20-7614-08dc728bd60e').subscribe({

    next: res => {
        this.user1[0] = res;
        const inde=this.user1.length
        this.store.userId = this.user1[0].userId
        console.log("res")
        console.log(this.user1)
    },
    error:error=>{}
  })
    // this.storesService.AddConection()
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
      street: ['']

    });
    console.log(this.connectionForm);

  }
  onSelect(statusId:string) {
    this.selectStatus = <Status>this.statuses.find(status => status.statusId === statusId);
    console.log(JSON.stringify( this.selectStatus))

// throw new Error('Method not implemented.');
  }
  onSelect2(categorieId:string) {
    this.selectCategorie = <Categorie>this.categories.find(c => c.categorieId ===categorieId);
    console.log(JSON.stringify( this.selectCategorie))

// throw new Error('Method not implemented.');
}
  onSubmit(): void{
console.log("onSubmit")
    if (this.connectionForm.valid) {
      // Send POST request to backend API to create connection



// ------------
      // this.store.categorie = this.selectCategorie;
      this.store.email = this.connectionForm.value.email;
      this.store.telephone = this.connectionForm.value.telephone;
      this.store.isConfirmEmail = this.connectionForm.value.isConfirmEmail;

      this.store.isConfirmSms = this.connectionForm.value.isConfirmSms;
      this.store.secondTelephone = this.connectionForm.value.secondTelephone;

      this.store.categorieId = this.selectCategorie.categorieId;
      this.store.name= this.connectionForm.value.nameStore;


      // this.store.status = this.selectStatus
      this.store.statusId=this.selectStatus.statusId
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


        this.http.post<Store>('https://localhost:7169'+'/api/Stores',this.store)
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
  }

