class Person {
    name;
    #age;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    getAge(){
        return this.#age;
    }
    static calculateTax(principal, tax){
        return principal+tax;
    }
}

let p = new Person('Person-1', 45);
console.log(p.getAge());
// let p = new Person();
// p.age=45;
// p.name='ABXY';
// console.log(p.age)
console.log(Person.calculateTax(3000,100));

Person.prototype.isHeOlder= function (age){
    return this.getAge() > age;
}

console.log(p.isHeOlder(23));

function InvoiceFunction (){
    return {
        calculateTax(principal, tax)
        {
            return principal + tax;
        },
        printInvoice(invoiceId){
            console.log("Printed invoice")
        }
    }
}

const inv = InvoiceFunction();
console.log(inv.calculateTax(4000,100));

