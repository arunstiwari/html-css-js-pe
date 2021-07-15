import {Person} from "./person";

class Employee extends Person{
    department= '';

    reviewPerformance():void{
        console.log(' reviewed performace');
        this.hello();
    }
}

const emp = new Employee();
emp.name='ABC';

emp.reviewPerformance();