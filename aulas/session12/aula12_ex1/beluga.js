function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    return (total / qtd).toFixed(2);
}

function sortear(n){
    n = n || 1;
    
    var nSorteado = Math.random();
    nSorteado = nSorteado * n;
    nSorteado = Math.floor(nSorteado);
    
    return nSorteado;
    
}

