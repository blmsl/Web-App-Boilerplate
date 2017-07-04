import { Component, Input, OnInit } from '@angular/core';
import { LikeComponent } from './like.component';

@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    styles: [`
        .handle {
            color: #ccc;
        }
        .media {
            margin-bottom: 20px;
        }
        .media-object {
            border-radius: 10px;
            height: 80px;
            max-width: 500px;
            width: auto;
        }
    `],
    providers: [ LikeComponent ]
})
export class PostComponent implements OnInit {
    @Input() data;
    constructor( private likeComponent: LikeComponent ) { }
    
    ngOnInit() {
        //console.log( this.data  );
    }
}