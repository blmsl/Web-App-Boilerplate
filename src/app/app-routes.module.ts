import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BlogComponent } from "app/blog/blog.component";
import { AboutComponent } from "app/about/about.component";
import { ContactComponent } from "app/contact/contact.component";
import { LoginComponent } from "app/login/login.component";
import { AdminComponent } from "app/admin/admin.component";

const appRoutes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "admin", component: AdminComponent },
  { path: "blog", component: BlogComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot( appRoutes ) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }