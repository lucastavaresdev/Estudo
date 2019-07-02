package orientacao_objetos

class Pessoa1

class Pessoa2 (var nome: String, var anoNascimento: Int)

class Pessoa3 (var nome: String){

    var ano: Int? = null;

    //se eu precisar de apenas um valor para uma classe eu crio um construtor
    constructor(nome: String, ano: Int) : this(nome){
        this.ano = ano;
    }

    // Atibutos nome e ano de Nascimento
    //comportamentos
    fun saudacao(){
        println("Ola meu nome é: $nome")
        println(ano)
    }


}

fun main(){


    val p1: Pessoa3 = Pessoa3("Geraldo", 1990)
    val p2: Pessoa3 = Pessoa3("leticia")

    p1.saudacao()
    p2.saudacao()

}