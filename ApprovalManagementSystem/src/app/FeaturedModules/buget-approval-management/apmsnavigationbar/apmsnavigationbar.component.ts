import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apmsnavigationbar',
  templateUrl: './apmsnavigationbar.component.html',
  styleUrls: ['./apmsnavigationbar.component.css']
})
export class ApmsnavigationbarComponent implements OnInit {
  public role:number;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.role=JSON.parse(localStorage.getItem('role')!);
  }
  ngDoCheck(): void {
    this.role=JSON.parse(localStorage.getItem('role')!);
  }

}
