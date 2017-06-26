import { Component } from '@angular/core';
import { AuthService } from "app/auth/auth.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'navi-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [ AuthService ]
})

export class NavComponent {
    private routeChanged: boolean = false;

    constructor( private authService: AuthService, private router: Router ) { 
        router.events.subscribe((val) => {
        this.routeChanged = val instanceof NavigationEnd;
        });
    }

    onRouteChange() {
        console.log( this.routeChanged );
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }

}