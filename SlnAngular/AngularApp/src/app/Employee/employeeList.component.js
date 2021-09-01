"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 100, name: "Tom", salary: 20000, gender: 'male', dateOfBirth: '3/4/1980' },
            { code: 101, name: "Alex", salary: 30000, gender: 'male', dateOfBirth: '5/6/1990' },
            { code: 102, name: "Mike", salary: 25000, gender: 'male', dateOfBirth: '1/1/1994' },
            { code: 103, name: "Mary", salary: 76000, gender: 'female', dateOfBirth: '4/8/1985' },
            { code: 104, name: "Tessa", salary: 87000, gender: 'female', dateOfBirth: '5/6/1987' },
            { code: 105, name: "Judy", salary: 70000, gender: 'female', dateOfBirth: '7/6/1996' }
        ];
        this.gender = 'all';
        this.all = this.employees.length;
        this.male = this.employees.filter(function (e) { return e.gender == 'male'; }).length;
        this.female = this.employees.filter(function (e) { return e.gender == 'female'; }).length;
    }
    EmployeeListComponent.prototype.onRadioButtonSelectionChanged = function (gender) {
        this.gender = gender;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.css']
    })
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map