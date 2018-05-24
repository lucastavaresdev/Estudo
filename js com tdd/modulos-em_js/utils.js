//exportação padrao 1 por arquivo
function sum(a, b) {
    return a + b;
}

export default sum;


//direto na função
export function sub(a,b){
    return a - b;
}

//exportação fora
function multi(a,b){
    return a *b;
}


function div(a,b){
    return a/b;
}

const pi = 3.14
//da para ter multiplos export 
export {multi, div,pi}
