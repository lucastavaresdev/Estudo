"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.print = function () {
        console.log("" + this.name);
    };
    return Person2;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, salary) {
        var _this = _super.call(this, name) || this;
        _this.salary = salary;
        return _this;
    }
    Employee2.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("Salary: " + this.salary);
    };
    return Employee2;
}(Person2));
var pl = new Person2("Lucas");
var empt = new Employee2('Lucas Tavares', 500);
pl.print();
empt.print();
var p2 = {};
//polimorfismo
var p3 = new Employee2("Lucy", 200);
p3.print();
//# sourceMappingURL=classes.js.map