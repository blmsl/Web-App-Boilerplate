import { AuthService } from "app/auth/auth.service";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { Post } from './model/post.model';
import 'rxjs/add/operator/map';


@Injectable()

export class DataService implements OnInit {

    constructor( public router: Router, private auth: AuthService ) { }

    ngOnInit(): void { }

    fetchData() {
        if( this.auth.isAuthenticated() ) {
            return firebase.database().ref('/post/').once('value').then(function(snapshot) {
            let posts = snapshot.val()
            // ...
            console.log( posts );
            });
        } else 
            return console.log( "Data service failed");
    }

    postData( post: any ) {

        if( this.auth.isAuthenticated() ) {
            // Get a key for a new Post.
           //let newPostKey = firebase.database().ref().child('posts').push().key;

            // Write the new post's data simultaneously in the posts list and the user's post list.
            let updates = {};
            updates['/post/'] = post;

            firebase.database().ref().update(updates);
            alert("post added");
            return this.router.navigate(['admin']);
        }
    }
}