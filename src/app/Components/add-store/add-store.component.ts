import { Categorie } from 'src/app/MOdeles/Categorie.model';
import { Status } from './../../MOdeles/Status.modele';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Conection } from 'src/app/MOdeles/Conection.model';
import { StoresService } from 'src/app/Services/stores.service';
import { User } from 'src/app/MOdeles/User.model';
import { Store } from 'src/app/MOdeles/Stores.model';

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
      // status: {
      //   statusId: '',
      //   type: '',
      //   cellPlans: [],
      //   locations: [],
      //   products: [],
      //   stores: [],
      //   users: []
      // },
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
  };
  selectStatus:Status={
    statusId: '',
    type: '',
    cellPlans: [],
    locations: [],
    products: [],
    stores: [],
    users: []
  }
  selectCategorie: Categorie={
    categorieId: '',
    nameCategorie: '',
    isActive: false
  };
  all:[]=[]
  myConection: Conection={
    email: '',
    telephone: '',
    secondTelephone: '',
    isConfirmSms: false,
    isConfirmEmail: false,
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

    this.http.get<User>('https://localhost:7169' + '/api/Users'+'/f0989879-e97a-417e-c6cf-08dc7f7d5804').subscribe({

    next: res => {
        this.user1[0] = res;
        const inde=this.user1.length
        this.store.user = this.user1[0];
        this.store.userId = this.user1[0].userId
        console.log("res")
        console.log(this.user1)
    },
    error:error=>{}
  })
    // this.storesService.AddConection()
    this.connectionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      secondTelephone: [''],
      isConfirmSms: [false],
      isConfirmEmail: [false],
      // city: ['', Validators.required],
      // houseNumber: [''],
      // familyDoor: [''],
      // floor: [''],
      // entrance: [''],
      // street: ['']

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
      this.myConection.email = this.connectionForm.value.email;
      this.myConection.telephone = this.connectionForm.value.telephone;
      this.myConection.isConfirmEmail = this.connectionForm.value.isConfirmEmail;

      this.myConection.isConfirmSms = this.connectionForm.value.isConfirmSms;
      this.myConection.secondTelephone = this.connectionForm.value.secondTelephone;

      console.log(this.myConection);


// ------------
      this.store.categorie = this.selectCategorie;
      this.store.categorieId = this.selectCategorie.categorieId;
      this.store.name="iglu"

      this.store.isConfirmEmail=true
      this.store.isConfirmSms=false
      this.store.city = "Tel-Hai"
      this.store.status = this.selectStatus
      this.store.statusId=this.selectStatus.statusId
      this.store.createdDate = new Date
      console.log("this.store")
      console.log(this.store)


        this.http.post<Store>('https://localhost:7169'+'/api/Stores',this.store)
          .subscribe({
            next: response => {
              // Handle success
              console.log('Connection created successfully:', response);
              // Optionally, reset the form
              this.connectionForm.reset();
            }, error: error => {
              // Handle error
              console.error('Error creating connection:', error);

            }
          });
    } else {
      this.connectionForm.markAllAsTouched();
      console.log("ffffffffff")



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

