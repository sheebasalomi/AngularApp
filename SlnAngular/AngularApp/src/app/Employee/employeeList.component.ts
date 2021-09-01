import { Component } from '@angular/core';
import { IEmployee } from './Model/employee';

@Component({
    selector: 'employee-list',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']

})
export class EmployeeListComponent {
  
    employees: IEmployee[] = [
        { code: 100, name: "Tom", salary: 20000, gender: 'male', dateOfBirth:'3/4/1980' },
        { code: 101, name: "Alex", salary: 30000, gender: 'male', dateOfBirth: '5/6/1990' },
        { code: 102, name: "Mike", salary: 25000, gender: 'male', dateOfBirth: '1/1/1994' },
        { code: 103, name: "Mary", salary: 76000, gender: 'female',dateOfBirth: '4/8/1985' },
        { code: 104, name: "Tessa", salary: 87000, gender: 'female', dateOfBirth: '5/6/1987' },
        { code: 105, name: "Judy", salary: 70000, gender: 'female', dateOfBirth: '7/6/1996' }
    ];
    gender: string = 'all';
    all: number = this.employees.length;
    male: number = this.employees.filter(e => e.gender == 'male').length;
    female: number = this.employees.filter(e => e.gender == 'female').length;

    onRadioButtonSelectionChanged(gender: string) {
        this.gender = gender;
        }
}