class Aluno{
    constructor(nome){
        this.nome = nome;
        this._notas = [];
    }
    adicionarnotas(){
        Array.prototype.forEach.call(arguments, nota => this._notas.push());
    }
    
    recuperarMedia(){
        var notas = this._notas;
        return blg.calcularMedia(...notas);//spred operator
    }
    
}

