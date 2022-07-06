import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/Shared/Models/employee';

@Component({
  selector: 'app-all-employee-list',
  templateUrl: './all-employee-list.component.html',
  styleUrls: ['./all-employee-list.component.css']
})
export class AllEmployeeListComponent implements OnInit {

  EmployeeList:Employee[];
  filteredEmployeeList:Employee[];
  displayedColumns=['employeeId','employeeName','designationName','managerId','dateOfJoining','contactNo','emailId'];
  dataSource = new MatTableDataSource<Employee>();
  private _filteredBy:string = '';

  get filteredBy():string
  {
      return this._filteredBy;
  }
  set filteredBy(value:string){
      this._filteredBy=value;
      this.filteredEmployeeList=this.performFilter(value);
      this.dataSource = new MatTableDataSource<Employee>(this.filteredEmployeeList);
      this.dataSource.paginator=this.paginator;
  }

 @ViewChild(MatPaginator) paginator: MatPaginator;
 constructor(private toastr: ToastrService,private employeeService:EmployeeService) { }

 ngOnInit(): void {
   this.employeeService.getAllEmployess().subscribe(response=>
     {
      this.filteredEmployeeList=response;
     this.EmployeeList=response;
     this.dataSource = new MatTableDataSource<Employee>(this.filteredEmployeeList);
     console.log(this.dataSource);
     this.dataSource.paginator=this.paginator;
     console.log(this.dataSource);
     },error=>{
       console.log(error);
     })
 }
 performFilter(filteringby:string):Employee[]
    {
      console.log(filteringby);
        filteringby=filteringby.toLowerCase();
        console.log(this.EmployeeList)
        return this.EmployeeList.filter((employee:Employee) => employee.EmployeeName.toLowerCase().includes(filteringby) || employee.DesignationName.toLowerCase().includes(filteringby) || employee.ManagerId.toString().includes(filteringby));
    }


}
