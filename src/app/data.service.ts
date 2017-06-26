import { AuthService } from "app/auth/auth.service";
import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()

export class DataService implements OnInit {

    constructor( public http: Http, private auth: AuthService ) { }

    ngOnInit(): void { }

    fetchData() {
        if( this.auth.isAuthenticated() ) {

            return this.http.get("https://blog-prototype-e9b02.firebaseio.com/.json").map(
                data => console.log( data )
            )
        } else 
            return console.log( "Data service failed");
    }
}