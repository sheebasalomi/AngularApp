import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeListComponent } from './Employee/employeeList.component';
import { EmployeeCountComponent } from './Employee/employeeCount.component';
import { SimpleComponent } from './Others/simple.component';


@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeCountComponent, SimpleComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
