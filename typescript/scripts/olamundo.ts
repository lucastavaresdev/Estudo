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
if(bool !== null){}
if(bool !== undefined){}

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


console.log(true === 1)


function add(v1:number, v2:number, v3?:number): number{
    if(v3 !== undefined)
        return v1 + v2+v3
    return v1 + v2
}

console.log(`add ${add(1,2,3)}`)
console.log(`add ${add(1,2)}`)

function add2(v1:any, v2:any, v3?:any): any{
    if(v3 !== undefined)
        return v1 + v2+v3
    return v1 + v2
}

console.log(`add ${add2("lucas", 3)}`)

let var1: any = "sass"

let example: void = null