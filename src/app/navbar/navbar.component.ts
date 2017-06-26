import { Component } from '@angular/core';
import { AuthService } from "app/auth/auth.service";

@Component({
    selector: 'navi-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [ AuthService ]
})

export class NavComponent {

    constructor( private authService: AuthService ) { }

    onLogout() {
        this.authService.logout();
    }

}