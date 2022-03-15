import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/Models/report';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
   reportsList:Report[];
   displayedColumns=['id','from','to','dateCreated','permanentLink'];

  constructor(private reportservice:ReportsService) { }

  ngOnInit(): void {
    this.reportservice.getAllReports().subscribe(response=>
      {
      this.reportsList=response;
      console.log(this.reportsList);
      },error=>{
        console.log(error);
      })

  }


}
