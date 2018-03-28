var flame = (function(){
    var f = {};    

    f.$ = document.querySelector .bind(document);
    f.$$ = document.querySelectorAll.bind(document);
    
    //todos os arrat tem o get media 
    Array.prototype.getMedia = function(){
      //return  _calcularMedia.apply(this,this);
        //ecma 6 passa cada elemento dentro da array spread operator serve para separar uma array
        
        return _calcularMedia(...this);
    }

    function _calcularMedia(){
        let params = arguments;
        
        let hasNaN = Array.prototype.some.call(params, (n) => isNaN(n));
        if(hasNaN) throw new Error('Somente Numeros');
        
        let total = Array.prototype.reduce.call(params, function(total, atual, i){
            return total + parseFloat(atual);
        });
        return total / arguments.length;
    }
    
    f.calcularMedia = _calcularMedia;
    
    
    return f;
})();