import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
<<<<<<< HEAD
=======
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';
>>>>>>> 7fcc3b2... Converted "contact.component" from template-driven to a model-driven form. Added angular/material styling and updated all outdated npm dependencies.

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

<<<<<<< HEAD
  constructor( private dataService: DataService ) { }
=======
  form: FormGroup;
>>>>>>> 7fcc3b2... Converted "contact.component" from template-driven to a model-driven form. Added angular/material styling and updated all outdated npm dependencies.

  firstname = new FormControl('', Validators.required );

  constructor( 
    private dataService: DataService, 
    private router: Router,
    private fb: FormBuilder
   ) {
    this.form = fb.group({
      firstname: this.firstname,
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
      message: ['', Validators.required ]
    })
  }

  onSubmit( ) {

    console.log( this.form.value );
    
    let email = this.form.value.email;
    let phone = this.form.value.phone;
    let message = this.form.value.message;
    let firstName = this.form.value.firstname;

<<<<<<< HEAD
    console.log( $event.value );
    
    this.dataService.sendEmail( firstName, phone, email, message );

=======
    let callback = ( err, res ) => {
      if ( err ) {
        console.log( res );
      } else {
        console.log( res );
        this.router.navigate(['about']);
      }
    }  
    this.dataService.sendEmail( firstName, phone, email, message, callback );
>>>>>>> 7fcc3b2... Converted "contact.component" from template-driven to a model-driven form. Added angular/material styling and updated all outdated npm dependencies.
  }

}