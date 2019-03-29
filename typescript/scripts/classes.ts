class Person2{
    public name: string;
    constructor(name: string){
        this.name = name
    }

    print(): void{
        console.log(`${this.name}`)
    }
}

class Employee2 extends Person2{
    public salary: number
    constructor(name: string, salary: number){
        super(name);
        this.salary = salary;
    }

    print():void{
        super.print();
        console.log(`Salary: ${this.salary}`)
    }
}



let pl = new Person2("Lucas")
let empt = new Employee2('Lucas Tavares', 500)
pl.print()
empt.print()
let p2 = <Person>{};


//polimorfismo

let p3: Person2 = new Employee2("Lucy", 200);
p3.print();
