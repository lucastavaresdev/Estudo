function calcularMedia() {

    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while (typeof arguments[x] === 'number') {
        total += arguments[x];
        x++
    }

    return (total / qtd).toFixed(2);
}

function sortear(n) {
    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado = nSorteado * _n;
    nSorteado = Math.floor(nSorteado);
    return nSorteado;
}


function imagem() {
    var selecionadiv = document.querySelector('.imagem');
    var numerorandomizado = sortear(5);
    if (numerorandomizado <= 0 || numerorandomizado >= 6) {
        sortear(7);
    } 
    selecionadiv.innerHTML = '<img src="images/' + numerorandomizado + '.jpg">';
}
