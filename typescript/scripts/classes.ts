class Person{
    name: string;
    constructor(name: string){
        this.name = name
    }

    print(): void{
        console.log(`${this.name}`)
    }
}

class Employee extends Person{
    salary: number
    constructor(name: string, salary: number){
        super(name);
        this.salary = salary;
    }

    print():void{
        super.print();
        console.log(`Salary: ${this.salary}`)
    }
}

let pl = new Person("Lucas")
let empt = new Employee('Lucas Tavares', 500)
pl.print()
empt.print()

let p2 = <Person>{};
