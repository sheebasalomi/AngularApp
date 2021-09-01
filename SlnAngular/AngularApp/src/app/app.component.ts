import { Component } from '@angular/core';
import { EmployeeComponent } from './Employee/employee.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
    pageHeading = 'Employee Details';
}
