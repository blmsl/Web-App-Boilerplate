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

import { DataService } from "app/data.service";
import { AuthService } from "app/auth/auth.service";
import { environment } from "environments/environment";

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
    LoginComponent
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
  providers: [ DataService, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
