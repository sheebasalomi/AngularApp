import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'simple',
    templateUrl: 'app/Others/simple.component.html'
})
export class SimpleComponent implements OnChanges {
    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {//property name - simpleInput
            console.log("current value: " + JSON.stringify(changes[propertyName].currentValue));
            console.log("previous value: " + JSON.stringify(changes[propertyName].previousValue));
        }
    }
}