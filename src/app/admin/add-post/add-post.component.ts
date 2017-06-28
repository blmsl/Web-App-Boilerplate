import { Component } from "@angular/core";
import { AuthService } from "app/auth/auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Post } from "app/model/post.model";
import { DataService } from "app/data.service";

@Component({
    selector: 'add-post',
    templateUrl: 'add-post.component.html',
    styleUrls: ['add-post.component.css'],
    providers: [ AuthService ]
})

export class AddPostComponent {
    currentURL: string;
    postTitle: string;
    postBody: string;
    imgTitle: string;
    imageSRC: string;
    post: Post;

    constructor( private router: Router, private dataService: DataService ) {
        this.currentURL = router.url;
    }

    fileLoad( $event: any ) {

        let myReader: FileReader = new FileReader();    
        let file: File =  $event.target.files[0];

        this.imgTitle = file.name;
        myReader.readAsDataURL(file);

        myReader.onload = (e: any) => {
        this.imageSRC = e.target.result;
        }
    }

    onSubmit( form: NgForm ) {
        this.postTitle = form.value.title;
        this.postBody = form.value.body;

        if( this.imageSRC === undefined ) this.imageSRC = null;

        this.post = new Post(
            this.postTitle,
            this.postBody,
            this.imageSRC
        )

        this.dataService.postData( this.post );
    }

}