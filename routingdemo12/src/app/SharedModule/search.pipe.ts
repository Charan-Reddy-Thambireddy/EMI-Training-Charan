import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Models/Employee.model';

@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(employeelist: Employee[],searchby: string ): Employee[] {
    return employeelist.filter((emp:Employee)=> emp.name.toLowerCase().includes(searchby.toLowerCase())||emp.location.toLowerCase().includes(searchby.toLowerCase())||emp.gender.toLowerCase().includes(searchby.toLowerCase())||emp.id==+searchby );
  }

}
