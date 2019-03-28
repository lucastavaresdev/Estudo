"use strict";
var p = document.createElement('p');
var ola = "Joyce Tomiati";
p.textContent = ola;
document.body.appendChild(p);
var num = 10;
var bool = true;
var str = 'Uma mensagem';
var templatestr = str + " de lucas";
console.log(templatestr);
function func() { }
if (bool !== null) { }
if (bool !== undefined) { }
if (bool) {
    var i = void 0;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var tuple;
tuple = ['lucas', 22];
console.log(tuple[0].toLowerCase());
console.log(tuple[1]);
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
})(Day || (Day = {}));
var day = Day.Monday;
console.log("day: " + day + " || " + Day.Tuesday + " || " + Day.Wednesday);
console.log("day: " + Day[0] + " ");
console.log(true === 1);
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log("add " + add(1, 2, 3));
console.log("add " + add(1, 2));
function add2(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log("add " + add2("lucas", 3));
var var1 = "sass";
var stringlenght = var1.length;
var stringUppercase = var1.toUpperCase();
console.log(stringlenght);
console.log(stringUppercase);
function add3(v1) {
    var v2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        v2[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add3("a soma \u00E9: ", 1, 2, 3);
//let example: void = null
//# sourceMappingURL=olamundo.js.map