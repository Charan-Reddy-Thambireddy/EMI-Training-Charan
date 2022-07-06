import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ems-navigation-bar',
  templateUrl: './ems-navigation-bar.component.html',
  styleUrls: ['./ems-navigation-bar.component.css']
})
export class EmsNavigationBarComponent implements OnInit {
  public role:number;
  constructor(private router:Router) { }

  
  ngOnInit(): void {
    this.role=JSON.parse(localStorage.getItem('role')!);
  }
  ngDoCheck(): void {
    this.role=JSON.parse(localStorage.getItem('role')!);
  }


}
