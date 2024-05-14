import { Status } from './../../MOdeles/Status.modele';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddConection } from 'src/app/MOdeles/Conection.model';
import { StoresService } from 'src/app/Services/stores.service';
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  constructor(private http: HttpClient, private storesService: StoresService, private formBuilder: FormBuilder) { }

  active: boolean = false
  statuses: Status[] = []
  all: [] = []
  myConection: AddConection = {
    email: '',
    telephone: '',
    secondTelephone: '',
    isConfirmSms: false,
    isConfirmEmail: false,
  };
  connectionForm: any

  ngOnInit(): void {
    this.http.get<Status[]>('https://localhost:7169' + '/api/Status').subscribe({

      next: res => {
        this.statuses = res;
      },
      error: error => { }

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

  onSubmit(): void {
    if (this.connectionForm.valid) {
      // Send POST request to backend API to create connection
      this.myConection.email = this.connectionForm.value.email;
      this.myConection.telephone = this.connectionForm.value.telephone;
      this.myConection.isConfirmEmail = this.connectionForm.value.isConfirmEmail;

      this.myConection.isConfirmSms = this.connectionForm.value.isConfirmSms;
      this.myConection.secondTelephone = this.connectionForm.value.secondTelephone;

      console.log(this.myConection);
      this.http.post<AddConection>('https://localhost:7169' + '/api/Conection', this.myConection)
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
    //   const status = {
    //     "type": "angularstatus22",
    //     "cellPlans":[]
    //   }
    //   console.log("status"+status.type)

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

