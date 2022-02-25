import { Component } from "@angular/core";

@Component({
selector:'pm-root',
template:`
<div class="wholepage">
 <div class="maintitle">
    <h1>{{pageTitle}}</h1>
 </div>
 <div>
   <nav class="navbar navbar-expand navbar-light bg-light">
      <ul class="nav nav-pills">
         <a class="nav-link" routerLink="/welcome">Home</a>
         <a class="nav-link" routerLink="/products">Product List</a>
      </ul>
   </nav>
   <router-outlet></router-outlet>
 </div>
</div>

`,
styleUrls:['./app.component.css']
})

export class AppComponent{
pageTitle: string ='Acme Product Management';
}