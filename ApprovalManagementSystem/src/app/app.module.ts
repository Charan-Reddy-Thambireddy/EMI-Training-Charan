import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmiLogModule } from 'emi-log';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmiLogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
