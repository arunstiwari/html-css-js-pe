
type Gender = string;
type Pound = number;

type Patient ={
    name: string,
    age: number,
    weight: Pound,
    sex : Gender
}

let patient: Patient = {
    age: 10, name: "Harshit", sex: "Male", weight: 20
}

console.log(patient);


function getFinalPrice(price:number , discount:number): number{
    return price - price/discount;
}

console.log(getFinalPrice(2000,10));

function getName(){
    var name: string ;
    var rate: number ;

    name = 'BAC';
}

class Person {
    // name: string;
    // age: number;
    // gender: Gender;

    constructor(public name: string, private age: number, public gender:Gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Person(name: string, age: number, gender:Gender){
    //     this.name = name;
    //     this.age = age;
    //     this.gender = gender;
    // }


}
let p = new Person("abc", 12,'male');


