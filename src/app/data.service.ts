import { AuthService } from "app/auth/auth.service";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { Post } from './model/post.model';
//import { emailjs } from 'emailjs/email';
import 'rxjs/add/operator/map';


@Injectable()

export class DataService {
    postsArr: any[] = [];

    constructor( public router: Router, private auth: AuthService ) { }

    fetchData() {
        //if( this.auth.isAuthenticated() ) {
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
    sendEmail( firstname: string, phone: string, email: string, comment: string ) {
        let commentBody = `email: ${ email }\nphone: ${ phone }\ncomments:\n ${ comment }`;

        console.log( commentBody );


        // emailjs.send("794740928368-h6l76boem9qe7i60kv0al0vqo6vfev1f.apps.googleusercontent.com", "template_mssg", 
        // {"reply_to": email, "from_name": firstname, "to_name": "Nick", "message_html": commentBody})

        // .then(  res => console.log( res ) );
    

        // let server = emailjs.server.connect({
        //     user:	"username", 
        //     password:"password", 
        //     host:  "smtp.your-email.com", 
        //     ssl:  true
        // });

        // let message	= {
        //     text:	"i hope this works", 
        //     from:	"you <username@your-email.com>", 
        //     to:		"someone <someone@your-email.com>, another <another@your-email.com>",
        //     cc:		"else <else@your-email.com>",
        //     subject:	"testing emailjs",
        //     attachment: 
        //     [
        //         {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
        //         {path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}
        //     ]
        // };
    }
}