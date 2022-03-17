import { Component, OnInit, ViewChild } from '@angular/core';
import { Report } from 'src/app/Models/report';
import { ReportsService } from 'src/app/Services/reports.service';
import { MatDialog } from '@angular/material/dialog';
import { AddReportComponent } from '../add-report/add-report.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
   reportsList:Report[];
   displayedColumns=['id','from','to','dateCreated','permanentLink','Actions'];
   dataSource = new MatTableDataSource<Report>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reportservice:ReportsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.reportservice.getAllReports().subscribe(response=>
      {
        response.map((e) => {
          e.permanentLink.toString() == "true" ? e.permanentLink = true : e.permanentLink = false
      });
      this.reportsList=response;
      this.dataSource = new MatTableDataSource<Report>(response);
      this.dataSource.paginator=this.paginator;
      console.log(this.dataSource);
      },error=>{
        console.log(error);
      })

  }

  openDialog() {
    this.dialog.open(AddReportComponent);
  }
}
