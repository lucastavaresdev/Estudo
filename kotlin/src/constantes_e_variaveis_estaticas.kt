//classes estaticas não precisam ser instanciadas
//private constructor nao deixa a classe ser instanciada uma vez ela nao precisa

class Constantes private constructor(){
    // posso ou nao ter um nome
    companion object Banco{
        val Pessoa = "Lucas"

        fun teste(){
            println("Sou um metodo estatico")
        }
    }


    object Vendas{
        val Qtd_Vendas = 10
    }


}



fun main() {
    println(Constantes.Pessoa)
    println(Constantes.teste())

    println(Constantes.Banco.teste())
}