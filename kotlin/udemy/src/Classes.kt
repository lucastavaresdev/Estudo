//exemplo de classes
class Pessoa1

//classe com atributo
class Pessoa2 (var nome: String, var anoDeNascimento: Int)

//classe com atributo e metodos
class Pessoa3(var nome: String){

    var anoDeNascimento: Int? = null;

    constructor(nome: String, anoDeNascimento: Int): this(nome){
        this.anoDeNascimento = anoDeNascimento
    }


    fun Saudacao(){
        println("Olá, meu nome é $nome")
    }


}


fun main(){
    val p1: Pessoa3 = Pessoa3("Lucas", 1995)
    val p2 = Pessoa3("Joyce")

    println(p1.anoDeNascimento)
    println(p1.nome)
    println(p1.Saudacao())

}