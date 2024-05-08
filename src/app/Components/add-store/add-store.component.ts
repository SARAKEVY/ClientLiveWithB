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
export class AddStoreComponent {
  myConection: AddConection={
    email: '',
    telephone: '',
    secondTelephone: '',
    isConfirmSms: false,
    isConfirmEmail: false,
  };
  connectionForm:any
  constructor( private http: HttpClient,private storesService:StoresService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
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

  onSubmit() :void{
    if (this.connectionForm.valid) {
      // Send POST request to backend API to create connection
      this.myConection.email = this.connectionForm.value.email;
      this.myConection.telephone = this.connectionForm.value.telephone;
      this.myConection.isConfirmEmail = this.connectionForm.value.isConfirmEmail;

      this.myConection.isConfirmSms = this.connectionForm.value.isConfirmSms;
      this.myConection.secondTelephone = this.connectionForm.value.secondTelephone;

      console.log(this.myConection);
        // http.post('your-api-url/create-connection', formData)
        this.http.post<AddConection>('https://localhost:7169'+'/api/Conection',this.myConection)
      // this.storesService.AddConection(this.myConection)
        .subscribe(response => {
          // Handle success
          console.log('Connection created successfully:', response);
          // Optionally, reset the form
          this.connectionForm.reset();
        }, error => {
          // Handle error
          console.error('Error creating connection:', error);

        });
    } else {
      // Form is invalid, mark fields as touched to display validation errors
      this.connectionForm.markAllAsTouched();
      console.log("ffffffffff")
    }
  }
   }
