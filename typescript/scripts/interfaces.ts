function printName(person: { name: string }) {
    console.log(person.name);
}

let randomObj = {name: "Lucas", age: 24};
let randomObj2 = {age: 24};

printName(randomObj)

interface Person {
    name: string;
    age?: number;//opcional
}

interface Employee extends Person{
    salary: number
}

let pe: Person = {name: "Lucas Tavares"}
let emp: Employee = {name: "Lucas Tavares", salary: 10}

printName(pe)
printName(emp)

function printName2(person: Person):void {
    console.log(person.name)
}

printName2(pe)
printName2(emp)
printName2(randomObj)
printName2({name: "Test"} as Person)

interface Manager extends Employee{
    readonly bonus: number;
}

let manager: Manager = {name: "Lucas Tavares", salary: 2000, bonus: 5};
manager.name = "Alterado";
//manager.bonus = " nao Altera";