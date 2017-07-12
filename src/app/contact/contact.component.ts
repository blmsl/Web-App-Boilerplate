import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private dataService: DataService ) { }

  ngOnInit() {
  }

  onSubmit($event) {
    
    let email = $event.value.email;
    let phone = $event.value.phone;
    let message = $event.value.message;
    let firstName = $event.value.firstname;

    console.log( $event.value );
    
    this.dataService.sendEmail( firstName, phone, email, message );

  }

}
