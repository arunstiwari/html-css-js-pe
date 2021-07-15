export abstract class Person {
    public name= '';
    private age =0;
    salary: number = 1000.0;

    protected hello(): string {
        return `My name is ${this.name}`;
    }
}