export interface IEmployee {
    code: number;
    name: string;
    gender: string;
    salary: number;
    dateOfBirth: string;
    department?: string;

    computeMonthlySalary(annualSalary: number): number;
}

export class Employee implements IEmployee {
    code: number;
    name: string;
    gender: string;
    salary: number;
    dateOfBirth: string;

    constructor(code: number, name: string, gender: string, salary: number, dateOfBirth: string) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
        this.dateOfBirth = dateOfBirth

    }

    computeMonthlySalary(annualSalary: number): number {
        return this.salary/12;
    }
}

export class Employee2 implements IEmployee {

    constructor(public code: number, public name: string, public gender: string, public salary: number, public dateOfBirth: string) {

    }

    computeMonthlySalary(annualSalary: number): number {
        return 0;
    }

}