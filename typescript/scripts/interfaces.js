"use strict";
function printName(person) {
    console.log(person.name);
}
var randomObj = { name: "Lucas", age: 24 };
var randomObj2 = { age: 24 };
printName(randomObj);
var pe = { name: "Lucas Tavares" };
var emp = { name: "Lucas Tavares", salary: 10 };
printName(pe);
printName(emp);
function printName2(person) {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({ name: "Test" });
var manager = { name: "Lucas Tavares", salary: 2000, bonus: 5 };
manager.name = "Alterado";
//manager.bonus = " nao Altera";
//# sourceMappingURL=interfaces.js.map