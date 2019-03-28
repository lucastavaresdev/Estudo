var p = document.createElement('p');
var ola: string = "Joyce Tomiati";
p.textContent = ola;
document.body.appendChild(p);

let num : number = 10;
let bool: boolean = true;
let str: string = 'Uma mensagem'
let templatestr: string = `${str} de lucas`

console.log(templatestr)

function func():void{}
if(bool != null){}
if(bool != undefined){}

if(bool){
    let i: number;
    for(i = 0 ; i<3;i++){
        console.log(i)
    }
}

let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3]

let tuple:[string, number]
tuple=['lucas',22]

console.log(tuple[0].toLowerCase())
console.log(tuple[1])

enum Day {Monday, Tuesday  = 2, Wednesday}
let day: Day = Day.Monday
console.log(`day: ${day} || ${Day.Tuesday} || ${Day.Wednesday}` )
console.log(`day: ${Day[0]} `)