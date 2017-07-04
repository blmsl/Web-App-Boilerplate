import { AuthService } from "app/auth/auth.service";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { Post } from './model/post.model';
import 'rxjs/add/operator/map';


@Injectable()

export class DataService {
    postsArr: any[] = [];

    constructor( public router: Router, private auth: AuthService ) { }

    fetchData() {
        if( this.auth.isAuthenticated() ) {
            this.postsArr = [];
            // Get a database reference to our posts
            let db = firebase.database();
            let ref = db.ref("posts/").orderByKey();

            // Attach an asynchronous callback to read the data at our posts reference
            ref.once("value").then( snapshot => {
                snapshot.forEach( el => {
                    let key = el.key;
                    let childData = el.val();
                    
                    this.postsArr.push( childData );            
                })
            console.log( this.postsArr );
            // posts array
            }), function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            }
        } else 
            return console.log( "Data service failed");
    }

    postData( postData: any ) {

        if( this.auth.isAuthenticated() ) {
            // Get a key for a new Post.
           let newPostKey = firebase.database().ref().child('posts').push().key;
           let storageRef = firebase.storage().ref();
           let updates = {};

            postData.id = newPostKey;

            storageRef.child(`images/${postData.imgTitle}`)
                .putString( postData.img, 'base64' )
                .then( snapshot => {
                    postData.img = snapshot.metadata.downloadURLs[0];
                    updates['/posts/' + newPostKey] = postData;
                    firebase.database().ref().update(updates);
                    alert("post added");
                    this.fetchData();
                })
            .catch( error => alert(`failed to upload: ${error}`));
        }
    }
}