import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/Models/report';
import { ReportsService } from 'src/app/Services/reports.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

  report = new Report(0, '', '', new Date(Date.now()), false);
  constructor(private ReportService: ReportsService, private route: Router, private router: ActivatedRoute, public dialog: MatDialog) { 

  }

  ngOnInit(): void {
    this.getReportDetailsById(this.router.snapshot.params['id']);
  }

  public getReportDetailsById(id: number): void {
    this.ReportService.getReportById(id).subscribe(data => {
      this.report = data;
    });
  }
  public delete(id: number) {
    this.ReportService.deleteReport(id).subscribe(response => {
      console.log(response);
      this.route.navigate(['reports-list']);
    }, (error: any) => {
      console.log(error);
    })
  }
  public update(id: number) {
    this.route.navigate(['edit',id]);
  }
}
