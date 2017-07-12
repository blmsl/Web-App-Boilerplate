import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "app/app-routes.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavComponent } from "./navbar/navbar.component";
import { ErrorComponent } from './error/error.component';
import { AlertModule } from 'ngx-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './admin/add-post/add-post.component'

import { DataService } from "app/data.service";
import { AuthService } from "app/auth/auth.service";
import { environment } from "environments/environment";
import { AuthGuard } from "app/auth/auth-guard.service";

import { LikeComponent } from "app/posts/like.component";
import { PostComponent } from "app/posts/post.component";
import { PostsComponent } from "app/posts/posts.component";
import { PostService } from "app/posts/post.service";
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ErrorComponent,
    AdminComponent,
    FooterComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    AddPostComponent,
    PostsComponent,
    PostComponent,
    LikeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ DataService, AuthService, AuthGuard, PostService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
