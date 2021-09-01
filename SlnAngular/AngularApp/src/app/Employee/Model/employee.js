"use strict";
var Employee = (function () {
    function Employee(code, name, gender, salary, dateOfBirth) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
        this.dateOfBirth = dateOfBirth;
    }
    Employee.prototype.computeMonthlySalary = function (annualSalary) {
        return this.salary / 12;
    };
    return Employee;
}());
exports.Employee = Employee;
var Employee2 = (function () {
    function Employee2(code, name, gender, salary, dateOfBirth) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
        this.dateOfBirth = dateOfBirth;
    }
    Employee2.prototype.computeMonthlySalary = function (annualSalary) {
        return 0;
    };
    return Employee2;
}());
exports.Employee2 = Employee2;
//# sourceMappingURL=employee.js.map