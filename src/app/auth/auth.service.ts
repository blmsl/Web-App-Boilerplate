//import * as firebase from 'firebase';
import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()

export class AuthService {
    currentUser: firebase.User;

    constructor( private afAuth: AngularFireAuth ) {
       afAuth.authState.subscribe( user => this.currentUser = user ) 
       console.log( typeof this.currentUser );

    }

    signinUser( email: string, password: string ) {
        firebase.auth().signInWithEmailAndPassword( email, password )
            .catch( error => console.log( error ))
    }

    logout() {
        this.afAuth.auth.signOut()
            .then( () => {
                console.log( "User logged out!")
            })
    }

    isAuthenticated() { 
        console.log( this.currentUser );
        return this.currentUser !== null;
    }
}