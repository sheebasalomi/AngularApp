"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EmployeeCountComponent = (function () {
    function EmployeeCountComponent() {
        this.gender = 'all';
        this.CountRadioButtonSelectionChanged = new core_1.EventEmitter();
    }
    EmployeeCountComponent.prototype.onSelectionChanged = function () {
        this.CountRadioButtonSelectionChanged.emit(this.gender);
    };
    return EmployeeCountComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCountComponent.prototype, "all", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCountComponent.prototype, "male", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCountComponent.prototype, "female", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EmployeeCountComponent.prototype, "CountRadioButtonSelectionChanged", void 0);
EmployeeCountComponent = __decorate([
    core_1.Component({
        selector: 'employee-count',
        templateUrl: 'app/employee/employeeCount.component.html',
    })
], EmployeeCountComponent);
exports.EmployeeCountComponent = EmployeeCountComponent;
//# sourceMappingURL=employeeCount.component.js.map