"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
        this.name = '';
        this.age = 0;
        this.salary = 1000.0;
    }
    Person.prototype.hello = function () {
        return "My name is " + this.name;
    };
    return Person;
}());
exports.Person = Person;
