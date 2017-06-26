import { Component } from "@angular/core";
import { AuthService } from "app/auth/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'add-post',
    templateUrl: 'add-post.component.html',
    styleUrls: ['add-post.component.css'],
    providers: [ AuthService ]
})

export class AddPostComponent {

    imgTitle: string;
    imageSRC: string;
    currentURL: string;

    constructor( private router: Router ) {
        console.log( router.url )
        this.currentURL = router.url;
    }

    fileLoad( $event: any ) {
        console.log( $event );

        let myReader: FileReader = new FileReader();    
        let file: File =  $event.target.files[0];

        this.imgTitle = file.name;
        myReader.readAsDataURL(file);

        myReader.onload = (e: any) => {
        this.imageSRC = e.target.result;
        }
    }

}