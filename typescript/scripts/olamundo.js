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
var example = null;
//# sourceMappingURL=olamundo.js.map