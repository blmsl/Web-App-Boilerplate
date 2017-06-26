
import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()

export class DataService implements OnInit {

    constructor( public http: Http ) { }

    ngOnInit(): void { }


    fetchData( email: string, password: string ) {
        return this.http.get("https://blog-prototype-e9b02.firebaseio.com/.json").map(

            ( response: Response ) => {
                let obj = response.json();
                
                if( obj.admin.email !== email || obj.admin.password !== password ) {
                    return false;
                } else 
                    return true;
            }
        )
    }
}