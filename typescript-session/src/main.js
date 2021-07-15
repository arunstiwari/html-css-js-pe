var patient = {
    age: 10, name: "Harshit", sex: "Male", weight: 20
};
console.log(patient);
function getFinalPrice(price, discount) {
    return price - price / discount;
}
console.log(getFinalPrice(2000, 10));
function getName() {
    var name;
    var rate;
    name = 'BAC';
}
var Person = /** @class */ (function () {
    // name: string;
    // age: number;
    // gender: Gender;

    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Person;
}());
var p = new Person("abc", 12, 'male');

