
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
})
export class EmployeeCountComponent {

    @Input() all: number;
    @Input() male: number;
    @Input() female: number;

    gender: string = 'all';

    @Output() CountRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    onSelectionChanged() {
        this.CountRadioButtonSelectionChanged.emit(this.gender);
    }
}